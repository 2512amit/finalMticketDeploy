import StationNameModel from "../../models/vehiclesModel/stationName.schema";
import VehicleModel from "../../models/vehiclesModel/vehicles.shema";
import { IVehicles } from "../../types/vehicles.type";

const create = (vehicle: IVehicles) => {
  return VehicleModel.create(vehicle);
};
const get=()=>{
  return StationNameModel.find().select("-isDeleted -createdAt -updatedAt -__v")
}
export default {
  create,
  get
};
