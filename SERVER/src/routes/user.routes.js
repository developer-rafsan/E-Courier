import express from "express";
import { userRegistration } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/registration", userRegistration);

export default userRoute;