const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//   },
  fname: {
    type: String,
 
  },
  lname: {
    type: String,
  
  },
  age: {
    type: String,

  },
    // address: {
    // type: String,
    // },

  grade: {
    type: String,

  },
//   stream: {
//     type: String,
//     required:true,
//   },
  subject: {
    type: String,
 
  },
//   average: {
//     type: String,
//     required:true,
//   }

});

const Student = mongoose.model('Student', studentSchema);



module.exports = Student;

