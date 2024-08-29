const Student = require('../models/student_model');
const mongoose = require('mongoose');

exports.getAllStudents =  async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send({ message:"Could not fetch student" , error:error.message });
  }
};

exports.getOneStudent =  async (req, res) => {
  try {
    const {id} = req.params
    const student = await Student.findById(id);
    if(!student){
        return res.status(404).send({ message: "Student not found"});
    }
    res.json(student);
  } catch (error) {
    res.status(500).send({ message:"Could not fetch student" , error:error.message });
  }
};


exports.createStudent =  async (req, res) => {
  const newStudent = new Student(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.updateStudents = async (req, res) => {
  try {
    const updatedStudent = await Student.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updatedStudent);
  } catch (error) {
    res.json({ message: error.message });
  }
};


exports.deleteAllStudents = async (req, res) => {
    try {
        await Student.deleteMany({});
        res.send({ message: "All students deleted successfully" });
      } catch (error) {
        res.status(500).send({ message: "Could not delete recipes", error: error.message });
      }
    };


exports.deleteStudents = async (req, res) => {
    try {
      const removedStudent = await Student.deleteOne({ _id: req.params.id });
      res.json(removedStudent);
    } catch (error) {
      res.json({ message: error.message });
    }
  };

// module.exports = router; 