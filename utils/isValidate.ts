import { NextFunction } from "express";

export const validataion = (toValidate: any, body: any, next: NextFunction) => {
  const { error } = toValidate.validate();
  if (error) {
    return next(error);
  }
};
