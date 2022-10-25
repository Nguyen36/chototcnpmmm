const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const Oder = require('./Oder');
const Product = require('./Product');
//const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.plugin(slug);

const OderDetail = new Schema({
    _id: {type: String},
    oder_id: { type: String,   ref:Oder},
    product_id: { type: String, ref:Product },
    unit_price: { type: String },
    quantity: { type: String,  },
    
},{ _id: false,
    timestamps: true
});
//OderDetail.plugin(AutoIncrement);
module.exports = mongoose.model('OderDetail',OderDetail);