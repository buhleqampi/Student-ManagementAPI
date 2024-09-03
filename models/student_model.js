const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  // _id: {
  //   type: String,

  // },
  fullName: {
    type: String,
  },
  yearOfStudy: {
    type: String,
  },
  marks: {
    type: String,
  },

  average: {
    type: String,
  },
  //   stream: {
  //     type: String,
  //     required:true,
  //   },
  // subject: {
  //   type: String,

  // },
  //   average: {
  //     type: String,
  //     required:true,
  //   }
});

const Student = mongoose.model("Student", studentSchema);

// Student.insertMany([{fname:"Busisiwe", lname: "Cebo", age:18,address:"40 Sir Lowry Street", grade:12, subject:"Mathematics"}, {fname: "Luvuyo", lname:"Niselo", age:19, address:"312 B Longo Street", grade:12 , subject:"Mathematics"}])

// Student.insertMany([{fname:"Busisiwe", lname: "Cebo", age:18,address:"40 Sir Lowry Street", grade:12, subject:"Mathematics"}, {fname: "Luvuyo", lname:"Niselo", age:19, address:"312 B Longo Street", grade:12 , subject:"Mathematics"}])

module.exports = Student;
