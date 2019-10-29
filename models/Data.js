const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const DataSchema = new Schema({
    data: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const Data = mongoose.model('data', DataSchema);

module.exports = Data;