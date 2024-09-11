const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, 
        required: true
     },
    author: { type: String, 
        required: true 
    },
    publishedDate: { type: Date, 
        required: true 
    },
    subject: {
        type:String,
        required:true
    }
  });
  
  module.exports = mongoose.model('Book', bookSchema);

  // Educator.insertMany([{name:"Ms Mary Sobekwa",description:"Teaches grade 11& 12 pupils. Specializes in Mathematics and Life Sciences."}])


