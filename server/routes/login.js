import express from "express";
// import {
//   login,
//   createStudentAccount,
//   deleteStudentAccount,
//   changePassword,
// } from "../controllers/login.controller.js";
import loginController from "../controllers/login.controller.js";

const router = express.Router();

router.post("/login", loginController.login);

router.delete(
  "/delete-student-account/:msv",
  loginController.deleteStudentAccount
);

router.post("/create-student-account", loginController.createStudentAccount);

router.patch("/change-password", loginController.changePassword);

// export default login;

export default router;
