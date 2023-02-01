import { Router } from "express";
import vehicleBookingController from "../controllers/vehicle/vehicleBooking.controller";
import auth from "../middleware/auth.middleware";


export const vehicleBookingRouter=Router()
vehicleBookingRouter.put('/newPassenger/:id',auth,vehicleBookingController.addNewPassengers)
vehicleBookingRouter.post('/paymentStatus/:bookingId',auth,vehicleBookingController.getPaymentDetails),
vehicleBookingRouter.get('/getSeatStatus/:id/:seatid?',auth,vehicleBookingController.getSeatStatus),
vehicleBookingRouter.get('/recentlyBookedTicket/:userId',auth,vehicleBookingController.getRecentlyBookedTicket),
vehicleBookingRouter.get('/:bookingId',auth,vehicleBookingController.getResultWithSameBookingId)
