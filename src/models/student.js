
import {Sequelize} from "sequelize"
import bcrypt from "bcrypt"
export default (sequelize) =>{

 class Student extends Sequelize.Model{}

 Student.init({


    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },


    firstName:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to first Name"
            },

            notEmpty:{
                msg:"Provide a value to first name"
            }
        }
    },

    lastName:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to last name"
            },

            notEmpty:{
                msg:"Provide a value to last name"
            }
        }
    },


    email:{
        type:Sequelize.STRING,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to email"
            },

            notEmpty:{
                msg:"Provide a value to email"
            }
        }
    },


    age:{
        type:Sequelize.INTEGER,
        allowNull:false,

        validate:{
            notNull:{
                msg:"Provide a value to age"
            },

            notEmpty:{
                msg:"Provide a value to age"
            }
        }
    },

    password:{
        type:Sequelize.VIRTUAL,
        allowNull:false,
        validate:{
            notNull:{

                 msg:'A password  is required'
            },
            notEmpty:{

                msg:'Please provide a password'
            },
            len:{
                args:[8,20],
                msg:'The password should be between 8 and 20 characters in length'
            }
        }
     },
     confirmedPassword:{

        type:Sequelize.STRING,
        allowNull:false,
        set(val){
            if(val===this.password){
                const  hashedPassword=bcrypt.hashSync(val,10);
                this.setDataValue('confirmedPassword',hashedPassword);
            }
        },
        validate:{
            notNull:{
                msg:'Both password must match'
            }
        }
    }

},{
    sequelize,
    timestamps:false,
    createdAt:false,
    updatedAt:false

 });

  return Student;
 
}