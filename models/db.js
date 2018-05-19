const mongoose = require('mongoose');
    Schema = mongoose.Schema;

//create a schema
const dbSchema = new Schema({
    // name: String,
    // surname: String,
    // sex: String,
    // location: String,
    // about: String,
    // slug: {
    //     type: String,
    //     unique: true
    // }

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
dbSchema.pre('save', function(next){
    this.slug = slugify(this.topic);
    next();
});


//create the model
const dbModel = mongoose.model('ToDo', dbSchema);

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