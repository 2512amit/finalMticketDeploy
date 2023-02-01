import { ErrorHandler } from "./errorHandler";

export const ERROR_MESSAGE = {
  SERVER_ERROR: new ErrorHandler(500, "Internal server error"),
  UNAUTHORIZED: new ErrorHandler(401, "Unauthorized"),
  NOT_FOUND: new ErrorHandler(404, "Not Found"),
};
