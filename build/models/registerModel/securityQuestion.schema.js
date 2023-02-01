"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityQuestionSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utils/base.schema");
exports.securityQuestionSchema = new base_schema_1.BaseSchema({
    question: {
        type: String,
        required: true,
        unique: true,
    },
});
const SecurityQuestionModel = (0, mongoose_1.model)("securityQuestion", exports.securityQuestionSchema);
exports.default = SecurityQuestionModel;
//# sourceMappingURL=securityQuestion.schema.js.map