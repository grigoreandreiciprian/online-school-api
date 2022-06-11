
import express from "express";

import {getAll, addStudent,updateStudent} from "../controllers/studentController.js"

import errorHandler from "../middleware/errorMiddleware.js"

import protect from "../middleware/autetificareMiddleware.js"


let Studentrouter= express.Router()





Studentrouter.route("/").get(protect,getAll,errorHandler)

Studentrouter.route("/").post(addStudent,errorHandler)

Studentrouter.route("/:id").put(updateStudent,errorHandler)


export default Studentrouter