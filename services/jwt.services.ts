import { JWT_SECRET, JWT_SECRET_EXPIRES_IN } from "../config";
import jwt from "jsonwebtoken";
class JwtService {
  static sign(
    payload: string | object,
    expiry = JWT_SECRET_EXPIRES_IN,
    secret = JWT_SECRET
  ) {
    return jwt.sign(payload, secret || "", { expiresIn: expiry });
  }

  static verify(token: string, secret = JWT_SECRET) {
    return jwt.verify(token, secret || "");
  }
}

export default JwtService;
