// * bcrypt is used to encrypt the password
// * multer - Multer, a middleware module designed for Node.js, streamlines
// the process of file uploads. It proves to be especially handy when paired
// with Express, as it simplifies the handling of multipart/form-data,
// a common format used for uploading files on the web.
// * cloudinary for storing images on cloud
// * dotenv for using environment variables in our backend
// * jsonwebtoken for creating authentication system
// * validator for data validation

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import bodyParser from "body-parser";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

// app config
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/admin", adminRouter);
//localhost:4000/api/admin/add-doctor
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API IS WORKING!");
});

app.listen(port, () => console.log("SERVER STARTED", port));
