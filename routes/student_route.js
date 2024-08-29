const express = require("express");
const router = express.Router();
const studentController = require('../controllers/student_controller');

router.post("/add-student", studentController.createStudent); 

router.get("/get-all-students", studentController.getAllStudents); 

router.get("/get-one-student/:id", studentController.getOneStudent);

router.delete("/delete-all", studentController.deleteAllStudents);

router.delete("/delete-one",studentController.deleteStudents);

// router.put("/update/:id", studentController, updateStudents);

 
module.exports = router;