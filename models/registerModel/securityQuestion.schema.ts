import { Document, model } from "mongoose";
import { ISecurityQuestion } from "../../types/securityQuestion.type";
import { BaseSchema } from "../../utils/base.schema";

export const securityQuestionSchema = new BaseSchema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
});

type ISecurityQuestionDocument = Document & ISecurityQuestion;

const SecurityQuestionModel = model<ISecurityQuestionDocument>(
  "securityQuestion",
  securityQuestionSchema
);

export default SecurityQuestionModel;
