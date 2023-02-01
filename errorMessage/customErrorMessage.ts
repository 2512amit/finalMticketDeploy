import { CustomErrorHandler } from "./customErrorHandler";

export const CUSTOM_ERROR_MESSAGE = {
  USER_ALREADY_EXIST: new CustomErrorHandler(409, "This email already exist"),
  CAPTCHA_NOT_PRESENT: new CustomErrorHandler(409, "captcha not available"),
};
