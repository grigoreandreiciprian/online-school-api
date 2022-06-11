import asyncHandler from "express-async-handler";


import db from "../config/db.js";





const getAll= asyncHandler((async(req,res)=>{

    let courses= await db.models.Course.findAll()

    res.status(200).json(courses)
}))


const addCourse= asyncHandler((async(req,res)=>{

    let course= await db.models.Course.build({

        courseName:req.body.courseName,
        department:req.body.department,
    })

    await course.save()

    res.status(204).end()
}))

export {getAll,addCourse}
