import { model, Document } from "mongoose";
import { IvehicleBooking } from "../../types/vehicleBooking.type";
import { BaseSchema } from "../../utils/base.schema";

export const vehicleBookingSchema=new BaseSchema({

    vechileId:{
      type:String,
      required:true
    },

    passengerDetails:{
  
      type:[
        {
          bookingId:{
            type:String,
          },
          from:{
            type:String,
            required:true
          },
          to:{
            type:String,
            required:true
          },
          departureDate:{
            type:Date,
            required:true
          },
          departureTime:{
            type:String,
            required:true
          },
          arrivalTime:{
            type:String,
            required:true
          },
          arrivalDate:{
            type:Date,
            required:true
          },
          passengerName:{
            type:String,
            required:true
          },
          passengerAge:{
            type:Number,
          required:true
        },
          passengerGender:{
            type:String,
            required:true
          },
          passengerSeat:{
            type:String,
            required:true
          },
          seat_booking_status:{
            type:String,
            default:"inProgress"
          },
          payment_status:{
            type:Boolean,
            default:false
          },
          fixedFare:{
            type:Number,
            required:true
          },
          seatFare:{
            type:Number,
            required:true
          },
          email:{
            type:String,
            required:true
          },
          phoneNumber:{
            type:Number,
            required:true
          },
          userId:{
            type:String,
            required:true
          },
        }
      ],
      default:undefined
    }

})


type IVehicleBookingDocument = Document & IvehicleBooking
const VehicleBookingModel = model<IVehicleBookingDocument>("vehicleBooking", vehicleBookingSchema);
export default VehicleBookingModel;