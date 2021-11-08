import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import loginRoute from "./routes/login.js";
import dotenv from "dotenv";
import createStudent from "./routes/student.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@sinhvien.youwj.mongodb.net/student_management?retryWrites=true&w=majority`;

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindandModify: false
  })
  .catch((error) => console.log(console.error()));

app.use("/", loginRoute);

app.use("/", createStudent);
// app.use('/student', (req, res) => {res.send("SSSS");});

app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
