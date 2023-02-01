"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utils/base.schema");
exports.userSchema = new base_schema_1.BaseSchema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    securityQuestion: {
        type: String,
        required: true,
    },
    securityAnswer: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const UserModel = (0, mongoose_1.model)("user", exports.userSchema);
exports.default = UserModel;
//# sourceMappingURL=user.schema.js.map