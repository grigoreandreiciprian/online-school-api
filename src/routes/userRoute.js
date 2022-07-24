
import express from "express";

import {getAll, addUser,updateUser,logIn} from "./../controllers/userController"

import errorHandler from "./../errorMiddleware.js"

import protect from "./../autetificareMiddleware.js"


let Userrouter= express.Router()





Userrouter.route("/").get(protect,getAll,errorHandler)

Userrouter.route("/").post(addUser,errorHandler)

Userrouter.route("/:id").put(updateUser,errorHandler)

Userrouter.route("/log").post(logIn,errorHandler,protect)


export default Userrouter