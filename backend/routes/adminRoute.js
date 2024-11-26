import express from "express";
import {
  addDoctor,
  allDoctors,
  appointmentsAdmin,
  loginAdmin,
} from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";

// When building an application, especially a complex one, having all routes
// in a single file can quickly become unmanageable. Express.Router() allows you to
// split your routes into different files, typically organized by resource
// (e.g., users, products, orders), and then combine these modular route files into the
// main application file. This makes the code cleaner, modular, and easier to maintain.

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/doctor-list", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailability);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);

export default adminRouter;

// image file is parsed using upload.single() middleware
