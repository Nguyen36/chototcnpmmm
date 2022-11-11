const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Image = new Schema({
    _id: {type: String},
    url: { type: String},
    product_id: { type: String, ref: 'Product' },
},{
    timestamps: true
});

module.exports = mongoose.model('Image',Image);