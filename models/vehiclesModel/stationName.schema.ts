import { model,Document } from "mongoose";
import { ICityName } from "../../types/vehiclesDetails.type";
import { BaseSchema } from "../../utils/base.schema";

const stationNameSchame=new BaseSchema({
    stationName:{
        type:String,
        required:true
    },
    station_id:{
        type:Number,
        required:true
    }
})

type IStationNameDocument = Document & ICityName
const StationNameModel = model<IStationNameDocument>("stationName",stationNameSchame );
export default StationNameModel