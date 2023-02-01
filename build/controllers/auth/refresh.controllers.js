"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const models_1 = require("../../models");
const customErrorHandler_services_1 = __importDefault(require("../../services/customErrorHandler.services"));
const jwt_services_1 = __importDefault(require("../../services/jwt.services"));
const refresh_validation_1 = require("../../validation/refresh.validation");
const error_constant_1 = require("../../constants/error.constant");
const refreshControllers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = refresh_validation_1.refreshSchema.validate(req.body);
    if (error) {
        return next(error);
    }
    let refreshtoken;
    try {
        refreshtoken = yield models_1.RefreshToken.findOne({
            token: req.body.refresh_token,
        });
        if (!refreshtoken) {
            return next(error_constant_1.ERROR_MESSAGE.UNAUTHORIZED);
        }
        let userId;
        try {
            const { _id } = yield jwt_services_1.default.verify(refreshtoken.token, config_1.REFRESH_TOKEN);
            userId = _id;
        }
        catch (error) {
            return next(customErrorHandler_services_1.default.unAuthorized("invalid refresh token"));
        }
        const user = yield models_1.UserModel.findOne({ _id: userId });
        if (!user) {
            return next(customErrorHandler_services_1.default.unAuthorized("No user found"));
        }
        //tokens
        const access_token = jwt_services_1.default.sign({ _id: user._id });
        const refresh_token = jwt_services_1.default.sign({ _id: user._id }, "1y", config_1.REFRESH_TOKEN);
        //database whitelist
        yield models_1.RefreshToken.create({ token: refresh_token });
        res.json({ access_token: access_token, refresh_token: refresh_token });
    }
    catch (error) {
        return next(error);
    }
});
exports.default = refreshControllers;
//# sourceMappingURL=refresh.controllers.js.map