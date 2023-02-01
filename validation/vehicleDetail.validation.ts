import Joi from "joi";
export const VehicleDetailsValidation = Joi.object({
    vehicleId: Joi.string().required(),
    vehicleName: Joi.string().required(),
    vehicleNumber: Joi.string().required(),
    TotalAvailableSeat: Joi.number().required(),
    classes: Joi.string().required(),
    dayOnWhichItRuns:Joi.object().keys(),
    date: Joi.date().iso().required(),
    arrivalTime: Joi.date().iso().required(),
    depatureTime: Joi.date().iso().greater(Joi.ref("arrivalTime")).required(),
  });



  