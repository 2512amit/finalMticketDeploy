import { connect } from "mongoose";
import { MONGO_URI } from "../config";
export const connectToMongo = async () => {
  try {
    await connect(MONGO_URI as string);
    console.log("CONNECTED TO MONGODB");
    return true;
  } catch (e) {
    console.log(e);
    throw "COULD NOT CONNECT TO MONGO DB";
  }
};
