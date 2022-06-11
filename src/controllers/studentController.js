

import asyncHandler from "express-async-handler";

import db from "../config/db.js";
import student from "../models/student.js";


const getAll= asyncHandler((async(req,res)=>{

        let all= await db.models.Student.findAll()

        res.status(200).json(all)
   
}))


const addStudent= asyncHandler((async(req,res)=>{
    
   
   

    await db.models.Student.create(req.body);


    console.log(req.body);



    res.status(204).end()
}))


const updateStudent= asyncHandler((async(req,res)=>{

    let {id}= req.params

    let student= await db.models.Student.findByPk(id)

    if(student){
        student.set({
            
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            age:req.body.age,
            password:req.body.password
        })
    
        student.save()

    }

     res.status(204).end()
}))


export {getAll, addStudent, updateStudent}