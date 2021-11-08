import express from "express";
import { createStudent } from "../controllers/student.controller.js";
const router = express.Router();

router.post("/student", createStudent);

// export default login;
export default router;
