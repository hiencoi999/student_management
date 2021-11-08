import Student from "../models/student.model.js";

export const createStudent = async (req, res) => {
  const { id, name, birthday, gender, gpa, status } = req.body;

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
    gpa,
    status,
  });
  await newStudent.save();
  console.log("creat successfully");
  // }
  // res.send("ALOOO");
};
