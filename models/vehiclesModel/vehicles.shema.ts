import { Document, model } from "mongoose";
import { IVehicles } from "../../types/vehicles.type";
import { BaseSchema } from "../../utils/base.schema";

export const VehicleSchema = new BaseSchema({
  vehicleName: {
    type: String,
    required: true,
  },
  vehicleID: {
    type: String,
    required: true,
    unique: true,
  },
});

type IVehicleDocument = Document & IVehicles;
const VehicleModel = model<IVehicleDocument>("vehicle", VehicleSchema);
export default VehicleModel;
