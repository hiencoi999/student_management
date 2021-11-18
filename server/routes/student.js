import express from "express";

import {
  createStudent,
  deleteStudent,
  exportToExcel,
  getAllStudent,
  importFromExcel,
} from "../controllers/student.controller.js";

const router = express.Router();

router.post("/student/create/import", importFromExcel);

router.get("/student/create/export", exportToExcel);

router.post("/student/create", createStudent);

router.delete("/student/delete", deleteStudent);

router.get("/student", getAllStudent);

export default router;
