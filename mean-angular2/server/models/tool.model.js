const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var toolSchema = new Schema({
    uid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: String,
    link: String,

});

// the schema is useless so far
// we need to create a model using it
var ToolModel = mongoose.model('Tool', toolSchema);

// make this available to our users in our Node applications
module.exports = ToolModel;