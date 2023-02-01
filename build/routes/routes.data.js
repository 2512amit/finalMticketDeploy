"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes_type_1 = require("../types/routes.type");
const auth_routes_1 = require("./auth.routes");
const securityQuestion_routes_1 = require("./securityQuestion.routes");
const user_routes_1 = require("./user.routes");
const vehicleBooking_routes_1 = require("./vehicleBooking.routes");
const vehicleDetails_route_1 = require("./vehicleDetails.route");
const vehicles_route_1 = require("./vehicles.route");
exports.routes = [
    new routes_type_1.Route("/auth", auth_routes_1.AuthRouter),
    new routes_type_1.Route("/security", securityQuestion_routes_1.SecurityQuestionRouter),
    new routes_type_1.Route("/user", user_routes_1.UserRouter),
    new routes_type_1.Route("/vehicle", vehicles_route_1.vehicleRouter),
    new routes_type_1.Route("/vehicleDetail", vehicleDetails_route_1.vehicleDetailRouter),
    new routes_type_1.Route("/vehicleBooking", vehicleBooking_routes_1.vehicleBookingRouter)
];
//# sourceMappingURL=routes.data.js.map