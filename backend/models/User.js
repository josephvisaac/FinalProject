const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    name: String,
    
    theologiansPicked: Array,
    favoriteBooks:Array
    
  },
  {
    timestamps: true,
    versionKey: false
  },
  

);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
