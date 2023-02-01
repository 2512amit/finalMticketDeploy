"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleBookingSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utils/base.schema");
exports.vehicleBookingSchema = new base_schema_1.BaseSchema({
    vechileId: {
        type: String,
        required: true
    },
    passengerDetails: {
        type: [
            {
                bookingId: {
                    type: String,
                },
                from: {
                    type: String,
                    required: true
                },
                to: {
                    type: String,
                    required: true
                },
                departureDate: {
                    type: Date,
                    required: true
                },
                departureTime: {
                    type: String,
                    required: true
                },
                arrivalTime: {
                    type: String,
                    required: true
                },
                arrivalDate: {
                    type: Date,
                    required: true
                },
                passengerName: {
                    type: String,
                    required: true
                },
                passengerAge: {
                    type: Number,
                    required: true
                },
                passengerGender: {
                    type: String,
                    required: true
                },
                passengerSeat: {
                    type: String,
                    required: true
                },
                seat_booking_status: {
                    type: String,
                    default: "inProgress"
                },
                payment_status: {
                    type: Boolean,
                    default: false
                },
                fixedFare: {
                    type: Number,
                    required: true
                },
                seatFare: {
                    type: Number,
                    required: true
                },
                email: {
                    type: String,
                    required: true
                },
                phoneNumber: {
                    type: Number,
                    required: true
                },
                userId: {
                    type: String,
                    required: true
                },
            }
        ],
        default: undefined
    }
});
const VehicleBookingModel = (0, mongoose_1.model)("vehicleBooking", exports.vehicleBookingSchema);
exports.default = VehicleBookingModel;
//# sourceMappingURL=vehicleBooking.schema.js.map