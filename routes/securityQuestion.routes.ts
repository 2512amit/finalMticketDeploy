import { Router } from "express";
import { getAllQuestions } from "../controllers/securityQuestion/securityQuestion.controllers";

export const SecurityQuestionRouter = Router();

SecurityQuestionRouter.get("/", async (req, res, next) => {
  try {
    const result = await getAllQuestions();
    res.send(result);
  } catch (err) {
    next(err);
  }
});
