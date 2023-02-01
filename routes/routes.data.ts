import { Route, Routes } from "../types/routes.type";
import { AuthRouter } from "./auth.routes";
import { SecurityQuestionRouter } from "./securityQuestion.routes";
import { UserRouter } from "./user.routes";
import { vehicleBookingRouter } from "./vehicleBooking.routes";
import { vehicleDetailRouter } from "./vehicleDetails.route";
import { vehicleRouter } from "./vehicles.route";
export const routes: Routes = [
  new Route("/auth", AuthRouter),
  new Route("/security", SecurityQuestionRouter),
  new Route("/user", UserRouter),
  new Route("/vehicle", vehicleRouter),
  new Route("/vehicleDetail",vehicleDetailRouter),
  new Route("/vehicleBooking",vehicleBookingRouter)
];
