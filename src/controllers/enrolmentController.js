
import asyncHandler  from "express-async-handler"
import sequelize from "sequelize"
import {QueryTypes} from "sequelize"
import db from "../config/db.js"


 

const getEnrolments= asyncHandler((async(req,res)=>{

    let enrolments= await db.models.Enrolment.findAll()

    res.status(200).json(enrolments)
}))


const addEnrolment= asyncHandler((async(req,res)=>{

    let enrolment= req.body
     
   
    const users= await sequelize.query("SELECT * from Users" , {type: QueryTypes.SELECT})

    console.log(users)

    //  await db.models.Enrolment.create(enrolment)

     res.status(204).end()
}))


const deleteEnrolment = asyncHandler ((async(req,res)=>{

    let {id}= req.params

    let enrolment= await db.models.Enrolment.findByPk(id)

    if(enrolment){
      
        await enrolment.destroy()          
    }

    res.status(204).end();
}))


export {addEnrolment, getEnrolments, deleteEnrolment}