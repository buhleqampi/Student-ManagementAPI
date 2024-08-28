const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },

  
});

const Data = mongoose.model('Data', studentSchema);

module.exports = Data;