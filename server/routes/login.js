import express from "express";
import {
  login,
  createStudentAccount,
} from "../controllers/login.controller.js";
const router = express.Router();

router.post("/login", login);

// router.get("/", (req, res) => {
//   res.send("HOME");
// });
router.post("/create-student-account", createStudentAccount);

// export default login;

export default router;
