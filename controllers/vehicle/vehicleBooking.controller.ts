import { Request, Response, NextFunction } from "express";
import VehicleBookingModel from "../../models/vehiclesModel/vehicleBooking.schema";
import mongoose from "mongoose";
import VehicleDetailModel from "../../models/vehiclesModel/vehiclesDetailSchema";
import  Stripe from 'stripe';
import PaymentModel from "../../models/paymentModel/payment.schema";

const vehicleBookingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      passengerDetails,
      vechileId,
    } = req.body;
    const vehicleBookingDetails = new VehicleBookingModel({
      passengerDetails,
      vechileId: vechileId,
   
    });
    await vehicleBookingDetails.save();
    res.send({ message: "user booking details saved successfully" });
  } catch (error) {
    throw error;
  }
};


const addNewPassengers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {id} = req.params;
    const { passengerDetails } = req.body;
    const splittedEmail=(passengerDetails[0].email).split('@')[0] 
    const bookingId:any=splittedEmail+new Date().getTime()
    const lengthOfPassengerInformation = passengerDetails.length;
    for(let i=0; i<lengthOfPassengerInformation; i++){
      passengerDetails[i]['bookingId'] =bookingId
    }
   
    const newSeatArray = [];
    const newPaymentArray:any=[]

    for (let i = 0; i < lengthOfPassengerInformation; i++) {
      newSeatArray.push(passengerDetails[i]["passengerSeat"]);
    }

    for (let i = 0; i < lengthOfPassengerInformation; i++) {
      newPaymentArray.push(passengerDetails[i]["fixedFare"]);
    }
    for (let i = 0; i < lengthOfPassengerInformation; i++) {
      newPaymentArray.push(passengerDetails[i]["seatFare"]);
    }

    const amount=newPaymentArray.reduce((acc:number,current:number) => acc+current) 
    const lengthOfPassengersDetail = await VehicleBookingModel.aggregate([
        {
            $match: {
              vechileId: id,
            },
          },
      {
        $project: {
          numberOfPassengers: {
            $cond: {
              if: {
                $isArray: "$passengerDetails",
              },
              then: {
                $size: "$passengerDetails",
              },
              else:"NA",
            },
          },
        },
      },
    ]);

    const passengerLen = lengthOfPassengersDetail[0]["numberOfPassengers"];
    const getPassengersBookedSeat = await VehicleBookingModel.aggregate(
      [
        {
            $match: {
              vechileId: id,
            },
          },
      ]
    )
    const newArray: any = [];
    for (let i = 0; i < passengerLen; i++) {
      newArray.push(
        getPassengersBookedSeat[0]["passengerDetails"][i]["passengerSeat"]
      );
    }
    const seatPresent = newSeatArray.filter(
      (element) => !newArray.includes(element)
    );
    let result;
    if (seatPresent.length != 0) {
      result = await VehicleBookingModel.findOneAndUpdate(
        { vechileId:id  },
        { 
          $push: {
            passengerDetails: passengerDetails, 
          }
        
        }
      );
// seat detail push to array now update the seat information in the vechile details table
      const seatInforFromPassengerDetails=await VehicleBookingModel.aggregate([
        {
            $match: {
              vechileId: id,
            },
          },
        {$unwind:"$passengerDetails"}
    ]) 
    const lengthOfPassengersDetail = await VehicleBookingModel.aggregate([
        {
            $match: {
              vechileId: id,
            },
          },
        {
          $project: {
            numberOfPassengers: {
              $cond: {
                if: {
                  $isArray: "$passengerDetails",
                },
                then: {
                  $size: "$passengerDetails",
                },
                else: "NA",
              },
            },
          },
        },
      ]);
      const passengerLength = lengthOfPassengersDetail[0]["numberOfPassengers"];
       
      const newPassengerArray=[]
      for(let i = 0; i < passengerLength; i++){
        newPassengerArray.push(seatInforFromPassengerDetails[i]["passengerDetails"]["passengerSeat"])
      }
        for(let i = 0; i < newPassengerArray.length; i++){
            await VehicleDetailModel.findOneAndUpdate(
                {$and:[{_id:new mongoose.Types.ObjectId(id)},{"seatDetails.seatNo":newPassengerArray[i]}]},
                {"seatDetails.$.status":"unavailable"}
            )  
        }
        const newGenderArray=[]
        for(let i = 0; i < passengerLength; i++){
            newGenderArray.push(seatInforFromPassengerDetails[i]["passengerDetails"]["passengerGender"])
          }
     
          for(let i = 0; i < newPassengerArray.length; i++){
            await VehicleDetailModel.findOneAndUpdate(
                {$and:[{_id:new mongoose.Types.ObjectId(id)},{"seatDetails.seatNo":newPassengerArray[i]}]},
                {"seatDetails.$.bookedGender":newGenderArray[i]}
            )  
        }
       
      return res.send({ data:{bookingId,amountToPay:amount}});
    } else {
      return next("Seat is occupied by another");
    }
  } catch (error) {
    throw error;
  }
};



// const getSeatDetails=async(
//     req: Request,
//     res: Response,
//     next: NextFunction
// )=>{
//    try {
//     const {id,vechileNumber}=req.params
//   const seatInforFromPassengerDetails=await VehicleBookingModel.aggregate([
//         {
//             $match: {
//               vechileId: id,
//             },
//           },
//         {$unwind:"$passengerDetails"}
//     ]) 

//     const lengthOfPassengersDetail = await VehicleBookingModel.aggregate([
//         {
//           $project: {
//             numberOfPassengers: {
//               $cond: {
//                 if: {
//                   $isArray: "$passengerDetails",
//                 },
//                 then: {
//                   $size: "$passengerDetails",
//                 },
//                 else: "NA",
//               },
//             },
//           },
//         },
//       ]);
//       const passengerLen = lengthOfPassengersDetail[0]["numberOfPassengers"];
//       const newArray = []
//       for(let i = 0; i < passengerLen; i++){
//         newArray.push(seatInforFromPassengerDetails[i]["passengerDetails"]["passengerSeat"])
//       }
    

//     for(let i = 0; i < newArray.length; i++){
//         const seatInfoFromVechileDetails =await VehicleDetailModel.findOneAndUpdate(
//             {vechileNumber:vechileNumber,"seatDetails.seatNo":newArray[i]},
//             {"seatDetails.$.status":"unavailable"}
//         )
        
//     }

//     const resultOfAvailableSeat=await VehicleDetailModel.find()

// return res.send(resultOfAvailableSeat)
//    } catch (error) {
//     throw error;
//    }

// }

// const seatStatus=async(
//   req:Request,
//   res:Response,
//   next:NextFunction,
// )=>{
//   try {
//      const {userId}=req.params
//     const result=await VehicleBookingModel.aggregate([
//       {$unwind:"$passengerDetails"},
//       {
//         $match:{
//           "passengerDetails.userId":userId
//         }
//       },
//       {
//         $project:{
//           _id:0,
//           __v:0,
//           vechileId:0,
//           isDeleted:0,
//           createdAt:0,
//           updatedAt:0,
//         }
//       },
//     ])
//     const newArray =[]
//     const len=result.length
//     for(let i=0;i<len;i++) {
//      newArray.push(Object.entries(result[i]).map(([key, value]) => value))
//     }
//      res.send(newArray.flat())
//   } catch (error) {
//       throw error
//   }
// }

const getPaymentDetails=async(
  req:Request, 
  res:Response, 
  next:NextFunction
)=>{
  try {
    const stripe=new Stripe(process.env.SECRET_KEY || '',{apiVersion:'2022-11-15'})
    const {bookingId}=req.params
    const{email,cardName,cardExpYear,cardExpMonth,cardNumber,cardCVC}=req.body

    const result=await VehicleBookingModel.aggregate([
      {$unwind:"$passengerDetails"},
      {$match:{
        "passengerDetails.bookingId":bookingId
      }},
    {
        $project:{
          "passengerDetails.fixedFare":1,
          "passengerDetails.seatFare":1,
          _id:0,
        }
    },
    {
        "$group": {
            "_id": null,
            "fixedFareSum": { "$sum": "$passengerDetails.fixedFare" },
            "seatFareSum": { "$sum": "$passengerDetails.seatFare" }
        }
    },
    {
        "$project": {
            "totalFare": { "$sum": ["$fixedFareSum", "$seatFareSum"] },
            _id:0
        }
    }
    ])
    const amount:any=(result[0]["totalFare"])*100
    const customer=await stripe.customers.create({
      name:cardName,
      email:email
    })
    const card_token=await stripe.tokens.create({
      card:{
        name:cardName,
        number:cardNumber,
        exp_month:cardExpMonth,
        exp_year:cardExpYear,
        cvc:cardCVC,
      }
    })
     
   
    const cardDetail=await stripe.customers.createSource(customer.id,{
      source:`${card_token.id}`
    })
    
     
    const paymentMethod=await stripe.paymentMethods.create({
      type:'card',
      card:{
        number:cardNumber,
        exp_month:cardExpMonth,
        exp_year:cardExpYear,
        cvc:cardCVC,
      }
    });

    let paymentIntent=await stripe.paymentIntents.create({
      payment_method:paymentMethod.id,
      amount:amount,
      currency:"inr",
      confirm:true,
      payment_method_types:['card'],
      description:"ticket booking payment",
      
    })
    const paymentResult=await PaymentModel.create({
      amount: amount,
      currency: paymentIntent.currency,
      description: paymentIntent.description,
      createdAt: paymentIntent.created,
      bookingId:bookingId,
      name:cardName,
      email:email,
    });
  await VehicleBookingModel.updateMany(
  { "passengerDetails.bookingId": bookingId },
  {
    $set: {
      "passengerDetails.$[].seat_booking_status": "booked",
      "passengerDetails.$[].payment_status": true,
    },
  }
);
 const resultAfterTicketBooked= await VehicleBookingModel.aggregate([
    {$unwind:"$passengerDetails"},
    {
      $match:{
        "passengerDetails.bookingId":bookingId,
        "passengerDetails.seat_booking_status":"booked",
        "passengerDetails.payment_status":true
      }
    },
    {
      $project:{
        isDeleted:0,
        createdAt:0,
        updatedAt:0,
        __v:0,
        _id:0,
        vechileId:0,
        "passengerDetails.userId":0,
        "passengerDetails._id":0,
        "passengerDetails.seat_booking_status":0,
        "passengerDetails.payment_status":0,
      }
     }
  ])
  const data= resultAfterTicketBooked.map((item:any)=>item.passengerDetails)
  const results:any = {};
  
for (const element of data) {
 if (!results[element.bookingId]) {
   results[element.bookingId] = {
     bookingId: element.bookingId,
     from: element.from,
     to: element.to,
     departureDate: element.departureDate,
     departureTime: element.departureTime,
     arrivalDate: element.arrivalDate,
     arrivalTime: element.arrivalTime,
     email:element.email,
     phoneNumber:element.phoneNumber,
     totalFare:(element.fixedFare+element.seatFare),
     passengerDetails: []
   };
 }
 results[element.bookingId].passengerDetails.push({
   passengerName: element.passengerName,
   passengerAge: element.passengerAge,
   passengerGender: element.passengerGender,
   passengerSeat: element.passengerSeat
 });
}  
    res.send({message:"payment successful",data:Object.values(results)});
  } catch (error) {
    throw error
  }
}

const getRecentlyBookedTicket=async(
 req: Request,
 res: Response,
 next: NextFunction
)=>{
  try {
    const{userId}=req.params
    
    const result=await VehicleBookingModel.aggregate([
       {$unwind:"$passengerDetails"},
       {
        $match:{
          "passengerDetails.userId": userId,
          "passengerDetails.seat_booking_status":"booked",
          "passengerDetails.payment_status":true
        }
       },
       {
        $project:{
          isDeleted:0,
          createdAt:0,
          updatedAt:0,
          __v:0,
          _id:0,
          vechileId:0,
          "passengerDetails.userId":0,
          "passengerDetails._id":0,
          "passengerDetails.seat_booking_status":0,
          "passengerDetails.payment_status":0,
        }
       }
    ])
   const data= result.map((item)=>item.passengerDetails)
   const results:any = {};
   
for (const element of data) {
  if (!results[element.bookingId]) {
    results[element.bookingId] = {
      bookingId: element.bookingId,
      from: element.from,
      to: element.to,
      departureDate: element.departureDate,
      departureTime: element.departureTime,
      arrivalDate: element.arrivalDate,
      arrivalTime: element.arrivalTime,
      email:element.email,
      phoneNumber:element.phoneNumber,
      totalFare:(element.fixedFare+element.seatFare),
      passengerDetails: []
    };
  }
  results[element.bookingId].passengerDetails.push({
    passengerName: element.passengerName,
    passengerAge: element.passengerAge,
    passengerGender: element.passengerGender,
    passengerSeat: element.passengerSeat
  });
}  
  res.send({data: Object.values(results)})
  } catch (error) {
    throw error
  }
}

const getResultWithSameBookingId=async(
  req:Request,
  res:Response,
  next:NextFunction,
)=>{
 try {
  const{bookingId}=req.params
  const result=await VehicleBookingModel.aggregate([
    {$unwind:"$passengerDetails"},
    {$match:{
      "passengerDetails.bookingId":bookingId
    }},
    {$set:{
      "passengerDetails.seat_booking_status":"booked",
      "passengerDetails.payment_status":true
    }}
  ]
   )
  res.send(result)
 } catch (error) {
   throw error
 }
}

const getSeatStatus =async(
  req:Request,
  res:Response,
  next:NextFunction 
)=>{
  try {
    const {id,seatid}=req.params
    const result=await VehicleDetailModel.aggregate([
      {$unwind:"$seatDetails"},
      {
        $match:{
           _id:new mongoose.Types.ObjectId(id),
          "seatDetails._id":new mongoose.Types.ObjectId(seatid)
        }
      },
      {
        $project:{
        vehicleID:0,
        vehicleNumber:0,
        station:0,
        TotalAvailableSeat:0,
        vehicleName:0,
        dayOnWhichItRuns:0,
        routeStartDate:0,
        routeEndDate:0,
        operatorName:0,
        amenities:0,
        isDeleted:0,
        createdAt:0,
        updatedAt:0,
        __v:0
        }
      }
    ])
    res.send(result)
  } catch (error) {
    throw error
  }
}

export default {
  vehicleBookingController,
  addNewPassengers,
  getPaymentDetails,
  getRecentlyBookedTicket,
  getResultWithSameBookingId,
  getSeatStatus
};
