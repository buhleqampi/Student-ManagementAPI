const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required:true,
  },
  lname: {
    type: String,
    required:true,
  },
  age: {
    type: String,
    required:true,
  },
    address: {
    type: String,
    },

  grade: {
    type: String,
    required:true,
  },
  stream: {
    type: String,
    required:true,
  },
  subject: {
    type: String,
    required:true,
  },
  average: {
    type: String,
    required:true,
  }

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;