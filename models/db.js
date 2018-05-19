const mongoose = require('mongoose');
    Schema = mongoose.Schema;

//create a schema
const dbSchema = new Schema({
    login: String,   
    description: String
});

//middlware which make sure that slug is created from name
// dbSchema.pre('save', function(next){
//     this.slug = slugify(this.name);
//     next();
// });


//create the model
const dbModel = mongoose.model('user', dbSchema);

//export the model
module.exports = dbModel;

function slugify(text) {

    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }