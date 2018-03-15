const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

//the mongoose object has a property called schema, take it and assign it to schema
//same use above code!!
const { Schema } = mongoose;

//create schema
const userSchema = new Schema({
  googleId: String
});

//creating a new collection called users
mongoose.model('users', userSchema);
