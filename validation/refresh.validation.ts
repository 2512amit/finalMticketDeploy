import Joi from "joi";
export const refreshSchema = Joi.object({
  refresh_token: Joi.string().required(),
});
