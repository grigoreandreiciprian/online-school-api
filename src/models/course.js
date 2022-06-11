
import { Sequelize } from "sequelize";


export default (sequelize) =>{

   class Course extends Sequelize.Model{}

   Course.init({

     id:{
         type:Sequelize.INTEGER,
         primaryKey:true,
         autoIncrement:true
     },

     courseName:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to CourseName"
            },

            notEmpty:{
                msg:"Provide a value CourseName"
            }
        }
    },

    department:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to Department"
            },

            notEmpty:{
                msg:"Provide a value to Department" 
            }
        }
    },
},{

    sequelize,
    timestamps:false,
    createdAt:false,
    updatedAt:false

   });

   return Course;

}