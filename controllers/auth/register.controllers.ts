import { UserModel } from "../../models";
import bcrypt from "bcryptjs";
import { Request, Response, NextFunction } from "express";
import { registerSchema } from "../../validation/register.validation";
import { verifyCaptcha } from "../../utils/captcha";
import registerRepo from "../../repo/register.repo";
import { CUSTOM_ERROR_MESSAGE } from "../../errorMessage/customErrorMessage";

const registerControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    const msg = error.details[0].message;
    return next(msg);
  }
  const {
    name,
    email,
    password,
    phone,
    gender,
    occupation,
    securityAnswer,
    securityQuestion,
    captcha,
  } = req.body;

  try {
    const exist = await registerRepo.isEmailExist(email);
    if (exist) {
      return next(CUSTOM_ERROR_MESSAGE.USER_ALREADY_EXIST);
    }
    const captchaexist = await verifyCaptcha(captcha);
    if (!captchaexist) {
      return next(CUSTOM_ERROR_MESSAGE.CAPTCHA_NOT_PRESENT);
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new UserModel({
        name: name,
        email: email,
        password: hashedPassword,
        phone: phone,
        gender: gender,
        occupation: occupation,
        securityQuestion: securityQuestion,
        securityAnswer: securityAnswer,
      });
      await user.save();
      res.send({
        message: "user created successfully",
      });
    }
  } catch (error) {
    return next(error);
  }
};

export default registerControllers;
