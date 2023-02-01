import { Request, Response, NextFunction } from "express";
import { ERROR_MESSAGE } from "../../constants/error.constant";
import registerRepo from "../../repo/register.repo";
import { UserModel } from "../../models";
import bcrypt from "bcryptjs";

const getUserByEmail = async (email: string) => {
  try {
    const result = await registerRepo.findUserByEmail(email);
    return result;
  } catch (error) {
    throw error;
  }
};

const forgotPasswordControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUserByEmail(req.body.email);
    if (!user) {
      return next(ERROR_MESSAGE.NOT_FOUND);
    }
    const findQuestion = user.securityQuestion;
    const getAnswer = user.securityAnswer;
    if (
      findQuestion === req.body.securityQuestion &&
      getAnswer === req.body.securityAnswer
    ) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const result = await UserModel.findOneAndUpdate(
        { email: req.body.email },
        { $set: { password: hashedPassword } }
      );
      res.send({ message: "password updated successfully" });
    }
  } catch (error) {
    throw error;
  }
};

export default forgotPasswordControllers;
