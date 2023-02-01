import { Router } from "express";
import vehicleControllers from "../controllers/vehicle/vehicle.controllers";
import { IVehicles } from "../types/vehicles.type";

export const vehicleRouter = Router();

vehicleRouter.post("/", async (req, res, next) => {
  try {
    const result = await vehicleControllers.createVehicle(
      req.body as IVehicles
    );
    res.send({ message: "vehicle added successfully" });
  } catch (error) {
    throw error;
  }
});

vehicleRouter.get('/',async(req, res, next) => {
  try {
    const result = await vehicleControllers.getVehicle()
    res.send({data: result})
   
  } catch (error) {
    throw error;
  }
})