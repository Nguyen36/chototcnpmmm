const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Brand = new Schema({
    _id: {type: String},
    name: { type: String},
   
},{
    timestamps: true
});

module.exports = mongoose.model('Brand',Brand);