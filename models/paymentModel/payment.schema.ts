import { model, Document } from "mongoose";
import { IPaymentDetails } from "../../types/payment.type";
import { BaseSchema } from "../../utils/base.schema";

export const paymentSchema=new BaseSchema({
    amount:{
        type:Number,
        required:true,
    },
    currency:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    bookingId:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }, 
    email:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
  
})


type IPaymentDocument = Document & IPaymentDetails
const PaymentModel = model<IPaymentDocument>("paymentdetail",paymentSchema );
export default PaymentModel;