import express from 'express'

import cors from 'cors'

import dotenv from 'dotenv'

import db from './db.js'

import Userrouter from './userRoute.js'

import courseRouter from "./coursesRoute.js"

import enrolmentRouter from"./enrolmentRoute.js"

import path from 'path'

dotenv.config();

let app=express();

app.use(express.json());

app.use(cors());

    app.use("/api/v1/users",Userrouter)

    app.use("/api/v1/update",Userrouter)

    app.use("/api/v1/add",Userrouter)

    app.use("/api/v1/log",Userrouter)


    app.use("/api/v1/courses",courseRouter)

    app.use('/api/v1/courses',courseRouter)

    app.use('/api/v1/corses',courseRouter)

    app.use('/api/v1/courses',courseRouter)


    app.use('/api/v1/enrolment', enrolmentRouter)

    app.use('/api/v1/enrolment',enrolmentRouter)

    app.use('/api/v1/enrolment',enrolmentRouter)

    const dirname= path.resolve();

    app.use(express.static(path.join(dirname, '/client/build')))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(dirname, 'client', 'build', 'index.html'))
    })




db.sequelize.sync().then((()=>{

    app.listen(3011,async()=>{
        console.log("Express server is listening")
    })
}))
