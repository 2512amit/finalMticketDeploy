import { Request, Response, NextFunction } from "express";
import customErrorHandler from "../services/customErrorHandler.services";
import JwtService from "../services/jwt.services";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  let authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(customErrorHandler.unAuthorized());
  }

  const token = authHeader.split(" ")[1];
  try {
    const { _id }: any = await JwtService.verify(token);
    const user = {
      _id: _id,
    };
    res.locals.user = user;
    next();
  } catch (err) {
    return next({ message: customErrorHandler.unAuthorized() });
  }
};

export default auth;
