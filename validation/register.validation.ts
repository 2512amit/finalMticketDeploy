import Joi from "joi";
export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(32).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string().max(13).required(),
  gender: Joi.string().required(),
  occupation: Joi.string().required(),
  securityQuestion: Joi.string().required(),
  securityAnswer: Joi.string().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  confirmPassword: Joi.ref("password"),
  captcha: Joi.string(),
});
