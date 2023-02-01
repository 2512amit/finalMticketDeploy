"use strict";
// import { expect } from "chai";
// import { Request, Response, NextFunction } from "express";
// import sinon from "sinon";
// import bcrypt from "bcryptjs";
// import { UserModel } from "../models";
// import { registerSchema } from "../validation/register.validation";
// import { registerControllers } from "../controllers";
// import { CUSTOM_ERROR_MESSAGE } from "../errorMessage/customErrorMessage";
// import registerRepo from "../repo/register.repo";
// import { verifyCaptcha } from "../utils/captcha";
// describe("registerControllers", () => {
// let req: Partial<Request>;
// let res: Partial<Response>;
// let next: NextFunction;
// beforeEach(() => {
// req = {
// body: {
// name: "John Doe",
// email: "johndoe@example.com",
// password: "password123",
// phone: "1234567890",
// gender: "male",
// occupation: "software developer",
// securityAnswer: "secret answer",
// securityQuestion: "what is your favorite color?",
// captcha: "captcha_token",
// },
// };
// res = {
// send: sinon.stub(),
// };
// next = sinon.stub();
// });
// afterEach(() => {
// sinon.restore();
// });
// it("should return error message if request body validation fails", async () => {
// sinon.stub(registerSchema, "validate").throws();
// await registerControllers(req as Request, res as Response, next);
// expect(next.calledOnceWith("error message")).to.be.true;
// });
// it("should return error message if email already exists", async () => {
// sinon.stub(registerRepo, "isEmailExist").returns(true);
// await registerControllers(req as Request, res as Response, next);
// expect(next.calledOnceWith(CUSTOM_ERROR_MESSAGE.USER_ALREADY_EXIST)).to.be.true;
// });
// it("should return error message if captcha token is not present", async () => {
// sinon.stub(verifyCaptcha, "verifyCaptcha").returns(false);
// await registerControllers(req as Request, res as Response, next);
// expect(next.calledOnceWith(CUSTOM_ERROR_MESSAGE.CAPTCHA_NOT_PRESENT)).to.be.true;
// });
// it("should create a new user and return success message", async () => {
// sinon.stub(registerRepo, "isEmailExist").returns(false);
// sinon.stub(verifyCaptcha, "verifyCaptcha").returns(true);
// sinon.stub(bcrypt, "hash").returns("hashed_password");
// sinon.stub(UserModel.prototype, "save").resolves();
// await registerControllers(req as Request, res as Response, next);
// expect(res.send.calledOnceWith({ message: "user created successfully" })).to.be.true;
// });
// });
//# sourceMappingURL=test.js.map