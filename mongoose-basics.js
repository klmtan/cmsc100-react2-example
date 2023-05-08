import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1/ICS",{useNewUrlParser:true, useUnifiedTopology:true});

const Student = mongoose.model('Student',{
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

let data = await Student.find({age:32});
console.log(data);

// const newStudent = new Student(
//     {
//         stdnum: "123456789",
//         fname: "Juan",
//         lname: "dela Cruz",
//         age: 20
//     }
// );
// await newStudent.save();

// let stud = await Student.findOne({age:65});
// stud.fname = "Pedro";
// await stud.save();

// await Student.updateOne({fname:"Pedro"},{$set: {age:18}});

// await Student.updateMany({age:65},{$set:{age:17}});

let a = await Student.deleteOne({age:17});
console.log(a.deletedCount);

mongoose.disconnect();