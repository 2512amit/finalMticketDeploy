import { RefreshToken, UserModel } from "../../models";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import {
  REFRESH_TOKEN,
  JWT_SECRET_EXPIRES_IN,
  REFRESH_SECRET_EXPIRES_IN,
} from "../../config";
import JwtService from "../../services/jwt.services";
import customErrorHandler from "../../services/customErrorHandler.services";
import { loginSchema } from "../../validation/login.validation";
import { verifyCaptcha } from "../../utils/captcha";
import { CUSTOM_ERROR_MESSAGE } from "../../errorMessage/customErrorMessage";

const loginControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return next(customErrorHandler.wrongCredentials());
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return next(customErrorHandler.wrongCredentials());
    }

    const access_token = JwtService.sign({ _id: user._id });
    const refresh_token = JwtService.sign(
      { _id: user._id },
      REFRESH_SECRET_EXPIRES_IN,
      REFRESH_TOKEN
    );
    const captchaexist = await verifyCaptcha(req.body.captcha);
    if (!captchaexist) {
      return next(CUSTOM_ERROR_MESSAGE.CAPTCHA_NOT_PRESENT);
    } else {
      await RefreshToken.create({ token: refresh_token });
      res.json({
        access_token: access_token,
        refresh_token: refresh_token,
        message: "Login success",
        id: user._id,
      });
    }
  } catch (err) {
    return next(err);
  }
};

export default loginControllers;
