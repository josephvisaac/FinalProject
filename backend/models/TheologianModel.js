const { Schema, model } = require('mongoose');
const TheologySchema = new Schema(
  {
    religion: String,
    tname: String,
    description: String,
    years:String, 
    img: String,
    books: Array
  }
);



module.exports = model('Theologian', TheologySchema);