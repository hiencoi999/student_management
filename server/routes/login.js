import express from "express";
import {
  login,
  createStudentAccount,
} from "../controllers/login.controller.js";
const router = express.Router();

router.post("/login", login);

router.post("/create-student-account", createStudentAccount);

export default router;
