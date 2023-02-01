import fetch from "node-fetch";
import { stringify } from "querystring";
import { CAPTCHA_SECRET_KEY } from "../config";
import { CUSTOM_ERROR_MESSAGE } from "../errorMessage/customErrorMessage";

export const verifyCaptcha = async (captcha: string) => {
  try {
    if (!captcha) {
      return CUSTOM_ERROR_MESSAGE.CAPTCHA_NOT_PRESENT;
    }
    const query = stringify({
      secret: CAPTCHA_SECRET_KEY,
      response: captcha,
    });

    const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;
    const response = await fetch(verifyURL);
    const data = await response.json();
    console.log(data);
    if (!data.success) {
      return false;
    } else if (data.success) {
      return true;
    }
  } catch (error) {
    throw error;
  }
};
