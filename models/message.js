var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a blueprint of the new Schema
var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// Create the model and export it
module.exports = mongoose.model('Message', schema);

