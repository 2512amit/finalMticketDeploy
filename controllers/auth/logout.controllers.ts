import { Request, Response, NextFunction } from "express";
import { RefreshToken } from "../../models";
import { refreshSchema } from "../../validation/refresh.validation";

const logoutControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = refreshSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  try {
    await RefreshToken.deleteOne({ token: req.body.refresh_token });
  } catch (error) {
    return next(error);
  }
  res.json({ status: 1 });
};

export default logoutControllers;
