"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const isEmailExist = (email) => {
    return models_1.UserModel.exists({ email: email });
};
const findUserByEmail = (email) => {
    return models_1.UserModel.findOne({ email: email });
};
exports.default = {
    isEmailExist,
    findUserByEmail,
};
//# sourceMappingURL=register.repo.js.map