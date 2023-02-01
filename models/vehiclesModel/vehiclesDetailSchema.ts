import { model, Document } from "mongoose";
import { IVehicleDetails } from "../../types/vehiclesDetails.type";
import { BaseSchema } from "../../utils/base.schema";

export const vehicleDetailSchema=new BaseSchema({
    vehicleID:{
        type:String,
        required:true
    },
    vehicleClassType:{
        type:String,
        required:true
    },
    vehicleType:{
        type:String,
        required:true
    },
    vehicleNumber:{
        type:String,
        required:true,
        unique: true,
    },
    station: {
        type:[
            {sourceName:{
                type:String,
                required:true,
            },
            stationId:{
                type:Number,
                required:true,
            },
            sourceDepartureTime:{
                type:String,
                required:true,
            },
            sourceArrivalTime:{
                type:String,
                required:true,
            },
            sourceDistance:{
                type:Number,
                required:true,
            },
            sourceDuration:{
                type:Number,
                required:true,
            },
            BoardingPoint:{
                type:[
                   {
                    pickUpTime:{
                        type:String,
                        required:true, 
                    },
                    pickUpPoint:{
                        type:String,
                        required:true,  
                    }
                   }
                ],
                default:undefined
            },
            destinationDepartureTime:{
                type:String,
                required:true, 
            },
            destinationArrivalTime:{
                type:String,
                required:true, 
            },
            destinationDistance:{
                type:Number,
                required:true, 
            },
            destinationDuration:{
                type:Number,
                required:true, 
            }

        }
        ],
        default:undefined
    },
    TotalAvailableSeat:{
        type:String,
        required:true
    },
    seatDetails:{
        type:[
            {
                seatNo:{
                    type:String,
                    required:true, 

                },
                seatFare:{
                    type:Number,
                    required:true, 

                },
                status:{
                    type:String,
                    default:"available"

                },
                bookedGender:{
                    type:String,
                    default:"male"
                }
            }
        ],
        default:undefined
    },
    vehicleName:{
        type:String,
        required:true
    },
    dayOnWhichItRuns:{
        type:Array,
        required:true
    },
    routeStartDate:{
       type:Date,
        required: true
    },
    routeEndDate:{
       type:Date,
       required: true
    },
    operatorName:{
        type:String,
        required:true
    },
    amenities:{
        type:Array,
        required: true
    }

})


type IVehicleDetailDocument = Document & IVehicleDetails
const VehicleDetailModel = model<IVehicleDetailDocument>("vehicleDetail", vehicleDetailSchema);
export default VehicleDetailModel;