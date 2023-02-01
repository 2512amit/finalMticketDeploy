class customErrorHandler extends Error {
  status: number;

  constructor(status: number, msg: string) {
    super();
    this.status = status;
    this.message = msg;
  }

  static alreadyExist(message: string) {
    return new customErrorHandler(409, message);
  }

  static wrongCredentials(message = "email or password is invalid") {
    return new customErrorHandler(401, message);
  }

  static unAuthorized(message = "unAuthorized") {
    return new customErrorHandler(401, message);
  }

  static notFound(message = "404 not found") {
    return new customErrorHandler(404, message);
  }

  static serverError(message = "internal server error") {
    return new customErrorHandler(500, message);
  }

  static captchaNotPresnt(message = "captcha not available") {
    return new customErrorHandler(400, message);
  }
}

export default customErrorHandler;
