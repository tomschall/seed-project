var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

// Create a blueprint of the new Schema
var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages:[{type: Schema.Types.ObjectId, ref: 'Message'}]
});

/* Use the mongoose-unique-validator for email, 
   otherwise the email would not be unique */
schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);

