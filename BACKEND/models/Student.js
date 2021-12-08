//import mongoose package
const mongoose = require('mongoose');

//schema is like data model 
//Ex:- Student--> name, age , stuedentNo
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    name : {
        type : String,
        //check whether there is an value for the name
        require: true
    },
    age : {
        type : Number,
        require: true
    },

    gender : {
        type : String,
        require: true
    }

})

//Student is the name for the  document
//it will become plural and lowercase in the mongodb
const Student = mongoose.model("Student",StudentSchema);

//export module
module.exports = Student;