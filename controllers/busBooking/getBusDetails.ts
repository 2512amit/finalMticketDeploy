import { Request, Response, NextFunction } from "express";
import BusBookingModel from "../../models/vehicleBooking.schema";

export const getBusDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await BusBookingModel.find().select("");
    res.send(result);
  } catch (error) {
    return next(error);
  }
};
