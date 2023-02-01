import { REFRESH_TOKEN } from "../../config";
import { RefreshToken, UserModel } from "../../models";
import customErrorHandler from "../../services/customErrorHandler.services";
import JwtService from "../../services/jwt.services";
import { Request, Response, NextFunction } from "express";
import { refreshSchema } from "../../validation/refresh.validation";
import { ERROR_MESSAGE } from "../../constants/error.constant";

const refreshControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = refreshSchema.validate(req.body);
  if (error) {
    return next(error);
  }

  let refreshtoken;
  try {
    refreshtoken = await RefreshToken.findOne({
      token: req.body.refresh_token,
    });

    if (!refreshtoken) {
      return next(ERROR_MESSAGE.UNAUTHORIZED);
    }

    let userId;
    try {
      const { _id }: any = await JwtService.verify(
        refreshtoken.token,
        REFRESH_TOKEN
      );
      userId = _id;
    } catch (error) {
      return next(customErrorHandler.unAuthorized("invalid refresh token"));
    }

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return next(customErrorHandler.unAuthorized("No user found"));
    }

    //tokens
    const access_token = JwtService.sign({ _id: user._id });
    const refresh_token = JwtService.sign(
      { _id: user._id },
      "1y",
      REFRESH_TOKEN
    );

    //database whitelist
    await RefreshToken.create({ token: refresh_token });

    res.json({ access_token: access_token, refresh_token: refresh_token });
  } catch (error) {
    return next(error);
  }
};

export default refreshControllers;
