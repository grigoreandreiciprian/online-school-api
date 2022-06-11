
import express from "express";

import { getAll,addCourse } from "../controllers/coursesController.js";

import errorHandler from "../middleware/errorMiddleware.js"



const courseRouter= express.Router()


courseRouter.route("/").get(getAll)

courseRouter.route("/").get(getAll,errorHandler)


courseRouter.route("/").post(addCourse)

courseRouter.route("/").post(addCourse,errorHandler)


export default courseRouter
