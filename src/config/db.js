import { Sequelize } from "sequelize";

import Student from "../models/student.js";

import Course from "../models/course.js";

import Enrolment from "../models/enrolment.js";

import dotenv from "dotenv"

dotenv.config()

const conectDb =  () =>{

    try{

        let sequelize= new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,
            {
                host:process.env.DB_HOST,
                dialect:process.env.DB_DIALECT
            })

            let db={
                models:{}
            }
          
            db.sequelize=sequelize;
            db.Sequelize=Sequelize;
            
            db.models.Student=Student(sequelize);

            db.models.Course=Course(sequelize);

            db.models.Enrolment=Enrolment(sequelize);


            db.models.Student.hasMany(db.models.Enrolment,{

               onDelete:'CASCADE',
               as:'fk_student_id',

               foreignKey:{
                   fieldName:'student_id',
                   allowNull:false
               }

            });

            db.models.Enrolment.belongsTo(db.models.Student,{
                as:'fk_student_id',

                foreignKey:{
                    fieldName:"student_id",
                    allowNull:false
                }
            })

            db.models.Course.hasMany(db.models.Enrolment,{
                onDelete:'CASCADE',
                as:'fk_course_id',

                foreignKey:{
                    fieldName:'course_id',
                    allowNull:false
                }
            })

            db.models.Enrolment.belongsTo(db.models.Course,{
                as:'fk_course_id',

                foreignKey:{
                    fieldName:"course_id",
                    allowNull:false
                }
            })

            return db
           

    }catch(e){
        throw new Error(e)
    }
}


let db= conectDb()

export default db