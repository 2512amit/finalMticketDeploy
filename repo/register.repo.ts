import { UserModel } from "../models";

const isEmailExist = (email: string) => {
  return UserModel.exists({ email: email });
};

const findUserByEmail = (email: string) => {
  return UserModel.findOne({ email: email });
};

export default {
  isEmailExist,
  findUserByEmail,
};
