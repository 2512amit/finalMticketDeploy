import mongoose, { model } from "mongoose";
import { IRefreshToken } from "../types/refreshToken.type";

const Schema = mongoose.Schema;

const refreshSchema = new Schema(
  {
    token: {
      type: String,
      unique: true,
    },
  },
  { timestamps: false }
);

type IRefreshrDocument = Document & IRefreshToken;
const RefreshTokenModel = model<IRefreshrDocument>(
  "RefreshToken",
  refreshSchema
);
export default RefreshTokenModel;
