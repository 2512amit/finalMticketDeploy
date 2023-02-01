import { Request, Response, NextFunction } from "express";
import UserModel from "../../models/registerModel/user.schema";
const getUserDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UserModel.findById(req.params.id).select(
      "-password -securityQuestion -securityAnswer -isDeleted -createdAt -updatedAt -_id -__v"
    );
    return res.send(result);
  } catch (error) {
    return next(error);
  }
};
export default getUserDetails;
