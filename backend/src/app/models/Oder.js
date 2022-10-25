const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const User = require('./User');
const Status = require('./OderStatus');
const Payment = require('./Payment');
//const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.plugin(slug);

const Oder = new Schema({
    _id: {type: String},
    customer_id: { type: String, ref: User   },
    buy_date: { type: Date },
    seller_id: { type: String, ref: User },
  
    phone: { type: String,  },
    address: { type: String, },
    receiver: {type:String},
    pay_id: { type: String, ref:Payment},
    status: {type:String, ref:Status ,default:'1'},
},{ _id: false,
    timestamps: true
});

//Oder.plugin(AutoIncrement);
module.exports = mongoose.model('Oder',Oder);