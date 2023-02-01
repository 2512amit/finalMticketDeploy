import { Request, Response, NextFunction } from "express";
import { SecurityQuestion } from "../../models";
import SecurityQuestionModel from "../../models/registerModel/securityQuestion.schema";
import securityQuestionRepo from "../../repo/securityQuestion.repo";
import { securityQuestionSchema } from "../../validation/securityQuestion.validation";

export const securityQuestionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = securityQuestionSchema.validate(req.body);
  if (error) {
    return next(error);
  }

  const { question } = req.body;
  const securityQuestion = new SecurityQuestion({
    question: question,
  });

  try {
    const result = await securityQuestion.save();
    return res.send(result);
  } catch (error) {
    return next(error);
  }
};

export const getAllQuestions = async () => {
  try {
    const questions = await securityQuestionRepo.getAll();
    return questions;
  } catch (err) {
    throw err;
  }
};
