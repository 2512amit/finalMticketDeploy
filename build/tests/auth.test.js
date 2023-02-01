"use strict";
// import request from 'supertest'
// import { loginControllers, registerControllers } from "../controllers";
// import { clearDatabase, closeDatabase, connect } from "./database.tests";
// beforeAll(async () => await connect());
// afterEach(async () => await clearDatabase());
// afterAll(async () => await closeDatabase());
// describe("Auth", () => {
//   describe("login", () => {
//     it("should login user", async () => {
//      const response=await request(registerControllers).post('/auth/signup');
//      expect(response.body).toEqual({
//       name: "amit kumar",
//       email: "4bhagatat@gmail.com",
//       phone: "919079323595",
//       gender: "male",
//       occupation: "bussiness",
//       password: "amit",
//       confirmPassword: "amit",
//       securityQuestion: "what is your pet name?",
//       securityAnswer: "manan"
//      });
//      expect(response.statusCode).toBe(200)
//     });
//     const response=await request(loginControllers).post('/auth/login');
//     expect(response.body).toEqual({
//       email: "4bhagatat@gmail.com",
//       password: "amit",
//     });
//     expect(response).toHaveProperty("accessToken");
//     expect(response).toHaveProperty("refreshToken");
//   });
//   describe("signUp", () => {
//     it("should signup user", async () => {
//       const response=await request(registerControllers).post('/auth/signup');
//       expect(response.body).toEqual({
//        name: "amit kumar",
//        email: "4bhagatat@gmail.com",
//        phone: "919079323595",
//        gender: "male",
//        occupation: "bussiness",
//        password: "amit",
//        confirmPassword: "amit",
//        securityQuestion: "what is your pet name?",
//        securityAnswer: "manan"
//       });
//       expect(response.statusCode).toBe(200)
//      });
//      const response=await request(loginControllers).post('/auth/login');
//      expect(response.body).toEqual({
//        email: "4bhagatat@gmail.com",
//        password: "amit",
//      });
//      expect(response).toHaveProperty("accessToken");
//      expect(response).toHaveProperty("refreshToken");
//     });
//     it("should throw error for user already exists", async () => {
//       try {
//          const response=await request(registerControllers).post('/auth/signup');
//      expect(response.body).toEqual({
//       name: "amit kumar",
//       email: "4bhagatat@gmail.com",
//       phone: "919079323595",
//       gender: "male",
//       occupation: "bussiness",
//       password: "amit",
//       confirmPassword: "amit",
//       securityQuestion: "what is your pet name?",
//       securityAnswer: "manan"
//      });
//      expect(response.statusCode).toBe(200)
//     )})
// describe("Auth Errors", () => {
//   describe("login", () => {
//     it("should throw error for invalid credentials", async () => {
//       try {
//         await registerControllers(req:Request,res:Response,next:NextFunction);
//         await loginControllers({
//           email: "4bhagatat@gmail.com",
//           password: "amit",
//         },{},{});
//       } catch (err: any) {
//         expect(err.message).toBe("Invalid credentials");
//       }
//     });
//     it("should throw error for user not found", async () => {
//       try {
//         await registerControllers({
//           name: "amit kumar",
//           email: "4bhagatat@gmail.com",
//           phone: "919079323595",
//           gender: "male",
//           occupation: "bussiness",
//           password: "amit",
//           confirmPassword: "amit",
//           securityQuestion: "what is your pet name?",
//           securityAnswer: "manan",
//         },{},{});
//         await loginControllers({
//           email: "4bhagatat@gmail.com",
//           password: "amit",
//         },{},{});
//       } catch (err: any) {
//         expect(err.message).toBe("USER NOT FOUND");
//       }
//     });
//   });
// });
//# sourceMappingURL=auth.test.js.map