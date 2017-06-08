var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: string, required: true},
    user: {type:Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', schema);