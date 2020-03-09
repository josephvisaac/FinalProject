const { Schema, model } = require('mongoose');
const TheologySchema = new Schema(
  {
    religion: String,
    name: String,
    description: String,
    years:String, //life birth/death
    img: String,
    books: Array
  }
);



module.exports = model('Theologian', TheologySchema);