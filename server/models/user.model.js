import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "teacher"],
    default: "student",
    required: true,
  },
});
// export collection name 'users' storing login infomation
const Users = mongoose.model("users", userSchema);
export default Users;
