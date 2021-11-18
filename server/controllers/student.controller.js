import Student from "../models/student.model.js";
import XLSX from "xlsx";

export const getAllStudent = async (req, res) => {
  try {
    const ListStudents = await Student.find({});

    res.json({ success: true, ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ getAllStudent" });
  }
};

export const createStudent = async (req, res) => {
  try {
    const {
      id,
      name,
      birthday,
      gender,
      phone,
      address,
      sum_of_credits,
      gpa,
      status,
    } = req.body;

    const isExist = await Student.findOne({ id });
    if (isExist) {
      return res
        .status(400)
        .json({ success: false, message: "Student already exist!" });
    }

    const newStudent = new Student({
      id,
      name,
      birthday,
      gender,
      phone,
      address,
      sum_of_credits,
      gpa,
      status,
    });
    await newStudent.save();
    console.log("Create successfully");
  } catch (error) {
    res.status(500).json({ message: "Server error ~ createStudent" });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({ id: req.body.id });
    if (deletedStudent) {
      res.json({ success: true, message: "Deleted successfully!" });
    } else {
      res.status(404).json({ success: false, message: "Deleted fail!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ deleteStudent" });
  }
};

export const importFromExcel = (req, res) => {
  const file = req.body;
  res.send(file);
};

export const exportToExcel = async (req, res) => {
  const aoo = await Student.find({}, { projection: { _id: 0 } }).toArray();
  const ws = XLSX.utils.json_to_sheet(aoo);
  XLSX.utils.book_append_sheet(wb, ws, name);

  const wb = XLSX.utils.book_new();
  await SheetJSMongo.book_append_mongo(wb, pres, "pres");
  await SheetJSMongo.book_append_mongo(wb, fmts, "fmts");
  XLSX.writeFile(wb, "mongocrud.xlsx");
};
