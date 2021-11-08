import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Nam", "Nữ"],
    default: "Nam",
    required: true,
  },
  gpa: {
    type: Number,
  },
  status: {
    type: String,
    enum: [
      "Không",
      "Nguy cơ nghỉ học",
      "Cảnh báo học vụ",
      "Thiếu tín chỉ",
      "Thiếu học phí",
      "Khen thưởng",
    ],
    default: "Không",
  },
});
//export collection name 'student' storing student info
const Student = mongoose.model("students", studentSchema);
export default Student;
