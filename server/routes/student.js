import express from "express";
import studentController from "../controllers/student.controller.js";
import { upload } from "../midleware/upload.midleware.js";

const router = express.Router();

router.post(
  "/student/create/import",
  upload.single("myFile"),
  studentController.importFromExcel
);

router.patch("/student/update/:id", studentController.updateStudent);

router.post("/student/create", studentController.createStudent);

router.delete("/student/delete/:id", studentController.deleteStudent);

//Get 1 student by id
router.get("/student/:id", studentController.getStudentDetail);

// Get all students in a class
router.get("/student/all/:lop", studentController.getAllStudent);

export default router;
