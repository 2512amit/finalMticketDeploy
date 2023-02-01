import { Document, model, Schema } from "mongoose";
import { IUser } from "../../types/user.type";
import { BaseSchema } from "../../utils/base.schema";

export const userSchema = new BaseSchema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  securityQuestion: {
    type: String,
    required: true,
  },
  securityAnswer: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

type IUserDocument = Document & IUser;
const UserModel = model<IUserDocument>("user", userSchema);
export default UserModel;
