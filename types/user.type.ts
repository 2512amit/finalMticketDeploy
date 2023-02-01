export interface IUser {
  name: string;
  email: string;
  phone: string;
  gender: string;
  occupation: string;
  securityQuestion: string;
  securityAnswer: string;
  password: string;
  confirmPassword?: String;
  captcha: String;
}
