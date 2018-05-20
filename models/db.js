const mongoose = require('mongoose');
    Schema = mongoose.Schema;
    
    

//create a schema
const dbUsersSchema = new Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    surname: String,
    sex: String,
    location: String,
    about: String,
    myRequests: String ,
    slug: {
        type: String,
        unique: true
    }});
const dbRequestSchema = new Schema({
    topic: String,
    type: String,
    description: String,
    duration: String,
    location: String,
    slug: {
        type: String,
        unique: true
    }
});

// middlware which make sure that slug is created from name
dbRequestSchema.pre('save', function(next){
    this.slug = slugify(this.topic);
    next();
});

dbUsersSchema.pre('save', function(next){
    this.slug = slugify(this.topic);
    next();
});

//create the model
const dbRequestModel = mongoose.model('requests', dbRequestSchema);
const dbUsersModel = mongoose.model('users', dbUsersSchema);

//export the model
module.exports = {
        dbRequestModel,
        dbUsersModel
    };


function slugify(text) {

    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }