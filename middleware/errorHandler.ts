import { DEBUG_MODE } from "../config";
import { ValidationError } from "joi";
import { NextFunction, Request, Response } from "express";
import customErrorHandler from "../services/customErrorHandler.services";
const erroHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let data = {
    message: "internal server error",
    ...(DEBUG_MODE === "true" && { originalError: err.message }),
  };
  if (err instanceof ValidationError) {
    statusCode = 422;
    data = {
      message: err.message,
    };
  }

  if (err instanceof customErrorHandler) {
    (statusCode = err.status),
      (data = {
        message: err.message,
      });
  }

  return res.status(statusCode).json(data);
};

export default erroHandler;
