import Joi from "joi";
export const busDetailsSchema = Joi.object({
  busNumber: Joi.string().min(3).max(8).required(),
  busName: Joi.string().required(),
  sourceStation: Joi.string().required(),
  destinationStation: Joi.string().required(),
  class: Joi.string().required(),
  status: Joi.string().required(),
  fare: Joi.string().required(),
  date: Joi.date().iso().required(),
  arrivalTime: Joi.date().iso().required(),
  depatureTime: Joi.date().iso().greater(Joi.ref("arrivalTime")).required(),
});
