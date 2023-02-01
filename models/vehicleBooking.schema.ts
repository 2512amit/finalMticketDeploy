import { Document, model } from "mongoose";
import { IvehicleBooking } from "../types/vehicleBooking.type";
import { BaseSchema } from "../utils/base.schema";

export const vehicleBookingSchema = new BaseSchema({
  vehicleName: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
    unique: true,
  },
  sourceStation: {
    type: String,
    required: true,
  },
  destinationStation: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  fare: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  depatureTime: {
    type: Date,
    required: true,
  },
});

type IvehicleBookingDocument = Document & IvehicleBooking;
const vehicleBookingModel = model<IvehicleBookingDocument>(
  "vehicleBooking",
  vehicleBookingSchema
);
export default vehicleBookingModel;
