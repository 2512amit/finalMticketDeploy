import { Router } from "express";
import { getUserDetails } from "../controllers";

export const UserRouter = Router();

UserRouter.get("/:id", getUserDetails);
