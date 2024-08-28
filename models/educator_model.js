const mongoose = require('mongoose');

const educatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Educator = mongoose.model('Data', educatorSchema);

module.exports = Educator;