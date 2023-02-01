import vehicleRepo from "../../repo/vehicleRepo/vehicle.repo";
import { IVehicles } from "../../types/vehicles.type";

const createVehicle = async (vehicle: IVehicles) => {
  try {
    const result = await vehicleRepo.create(vehicle);
    return result;
  } catch (error) {
    throw error;
  }
};

const getVehicle=async()=>{
  try {
    const result=await vehicleRepo.get()
    return result
  } catch (error) {
    throw error;
  }
}

export default {
  createVehicle,
  getVehicle
};
