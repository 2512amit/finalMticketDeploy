"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validataion = void 0;
const validataion = (toValidate, body, next) => {
    const { error } = toValidate.validate();
    if (error) {
        return next(error);
    }
};
exports.validataion = validataion;
//# sourceMappingURL=isValidate.js.map