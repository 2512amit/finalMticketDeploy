import VehicleDetailModel from "../../models/vehiclesModel/vehiclesDetailSchema";

  const get = (
  page?: number,
  limits?: number,
  filter?: string,
  value: string = "",
  sortBy?: string,
  order?: any
) =>
  VehicleDetailModel.find({
    isDeleted: false,
    // "vehicleType": "AC",
    // "vehichleClassType": "SEATER"
    [filter || "classes"]: { $regex: new RegExp("^" + (value || '') + ".*", "i") },
  })
    .sort({ [sortBy || "TotalAvailableSeat"]: order })
    .skip(((page || 1) - 1) * (limits || 2))
    .limit(limits || 2);


const getTotalCount=()=>{
   return  VehicleDetailModel.find({$isDeleted:false}).count()
}
    export default{
        get,
        getTotalCount
    }