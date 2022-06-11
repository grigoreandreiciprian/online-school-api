import express from 'express'

import cors from 'cors'

import dotenv from 'dotenv'

import db from './config/db.js'

import Studentrouter from './routes/studentRoute.js'

import courseRouter from "./routes/coursesRoute.js"

dotenv.config();

let app=express();

app.use(express.json());

app.use(cors());

    app.use("/api/v1/students",Studentrouter)

    app.use("/api/v1/update",Studentrouter)

    app.use("/api/v1/add",Studentrouter)


    app.use("/api/v1/courses",courseRouter)

    app.use('/api/v1/courses',courseRouter)

db.sequelize.sync().then((()=>{

    app.listen(3011,async()=>{
        console.log("Express server is listening")
    })
}))
