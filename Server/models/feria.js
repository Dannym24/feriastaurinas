const mongoose = require('mongoose');

const feriaSchema = new mongoose.Schema({
  nombre: String,
  fecha: Date,
  Ciudad: String,
});

module.exports = mongoose.model('Feria', feriaSchema);
