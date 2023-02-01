import { createTransport } from "nodemailer";
import { EMAIL_PASSWORD } from "../config";
export const sendEmail = async (
  to: string | string[],
  subject: string,
  message: string
) => {
  try {
    const transport = createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "pearl.rosenbaum@ethereal.email",
        pass: EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    await transport.sendMail({
      to,
      subject,
      text: message,
      from: "amit.kumar@coditas.com",
    });
    return true;
  } catch (e) {
    throw e;
  }
};
