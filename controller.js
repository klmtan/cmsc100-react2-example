import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1/ICS",{useNewUrlParser:true, useUnifiedTopology:true})

const Student = mongoose.model('Student',{
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

const homePage = (req,res) => {
    res.send("Hello World");
}

const findAllStudents = async (req,res) =>{
    res.send(await Student.find({}));
}

const findByAge = async (req,res) => {
    res.send(await Student.find({age: req.query.age}));
}

const findStudent = async (req,res) => {
    res.send(await Student.find({fname:req.body.fname, lname:req.body.lname}));
}
export {homePage, findAllStudents, findByAge, findStudent}