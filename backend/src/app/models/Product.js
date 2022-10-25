
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const User = require('./User');
const Category= require('./Category')
const Brand_id= require('./Brand')

mongoose.plugin(slug);
//const AutoIncrement = require('mongoose-sequence')(mongoose);


const Product = new Schema({
    _id: { type: String},
    name: { type: String},
    price: { type: String },
    description: { type: String, },
    image: { type: String, default:"https://cdn.honda.com.vn/motorbike-versions/October2021/mTuI6iTbdYCOkHBMnsNw.png" },
    amount: { type: String,  },
    status: { type: String, },

    category_id: {type: String, ref: Category},
    seller_id: {type: String, ref: User},
    brand_id: {type: String, ref:Brand_id},

     slug: {
        type:String, 
        slug:'name',
        unique: true},
  
},{_id: false ,
    timestamps: true
});

//Product.plugin(AutoIncrement,);
module.exports = mongoose.model('Product',Product);