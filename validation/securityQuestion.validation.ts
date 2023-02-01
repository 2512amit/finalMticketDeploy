import Joi from "joi";
export const securityQuestionSchema = Joi.object({
  question: Joi.string().required(),
});
