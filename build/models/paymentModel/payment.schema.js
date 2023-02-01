"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utils/base.schema");
exports.paymentSchema = new base_schema_1.BaseSchema({
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    bookingId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
const PaymentModel = (0, mongoose_1.model)("paymentdetail", exports.paymentSchema);
exports.default = PaymentModel;
//# sourceMappingURL=payment.schema.js.map