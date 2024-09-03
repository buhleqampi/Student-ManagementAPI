const mongoose = require("mongoose");

const educatorSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
  },
});

const Educator = mongoose.model("Educator", educatorSchema);

// Educator.insertMany([{name:"Ms Mary Sobekwa",description:"Teaches grade 11& 12 pupils. Specializes in Mathematics and Life Sciences."}])

module.exports = Educator;
