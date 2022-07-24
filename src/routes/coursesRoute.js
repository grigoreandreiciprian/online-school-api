
import express from "express";

import { getAll,addCourse, deleteCourse, updateCourse } from "./../controllers/coursesController.js";
import protect from "./../middleware/autetificareMiddleware.js";

import errorHandler from "./../middleware/errorMiddleware.js"



const courseRouter= express.Router()




courseRouter.route("/").get(getAll,errorHandler)


courseRouter.route("/").post(addCourse,protect)

courseRouter.route("/").post(addCourse,errorHandler)

courseRouter.route("/:id").delete(deleteCourse,errorHandler)

courseRouter.route("/:id").put(updateCourse,errorHandler)





export default courseRouter
