"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleBookingRouter = void 0;
const express_1 = require("express");
const vehicleBooking_controller_1 = __importDefault(require("../controllers/vehicle/vehicleBooking.controller"));
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
exports.vehicleBookingRouter = (0, express_1.Router)();
exports.vehicleBookingRouter.put('/newPassenger/:id', auth_middleware_1.default, vehicleBooking_controller_1.default.addNewPassengers);
exports.vehicleBookingRouter.post('/paymentStatus/:bookingId', auth_middleware_1.default, vehicleBooking_controller_1.default.getPaymentDetails),
    exports.vehicleBookingRouter.get('/getSeatStatus/:id/:seatid?', auth_middleware_1.default, vehicleBooking_controller_1.default.getSeatStatus),
    exports.vehicleBookingRouter.get('/recentlyBookedTicket/:userId', auth_middleware_1.default, vehicleBooking_controller_1.default.getRecentlyBookedTicket),
    exports.vehicleBookingRouter.get('/:bookingId', auth_middleware_1.default, vehicleBooking_controller_1.default.getResultWithSameBookingId);
//# sourceMappingURL=vehicleBooking.routes.js.map