
import express from"express"

import {addEnrolment, getEnrolments, deleteEnrolment} from "./../controllers/enrolmentController"


// import errorHandler from "../middleware/errorMiddleware"


let enrolmentRouter= express.Router()


enrolmentRouter.route("/").get(getEnrolments)
enrolmentRouter.route("/").post(addEnrolment)
enrolmentRouter.route("/:id").delete(deleteEnrolment)


export default enrolmentRouter