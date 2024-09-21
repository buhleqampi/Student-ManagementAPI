const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  name: {
    type: String, 
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
  interest: {
    type: String,
  },
  gpa:{
    type:String,
  },
  country:{
    type:String,
  },
//   roles: {
//     type: [{
//         type: String,
//         enum: ['user', 'admin']
//     }],
//     default: ['admin']
// },
});

const Quiz = mongoose.model('Quiz', quizSchema);

// Quiz.insertMany([{name:"Asekona Mali",age:"18", gender:"Female", interest:"Medicine", gpa:"3.0", country:"South Africa"}])

module.exports = Quiz ;
