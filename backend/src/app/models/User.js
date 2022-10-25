const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const User = new Schema({
    _id:{type: String },
    username: { 
        type: String, 
        required: true,
 
        unique: true,

    },
    password: { 
        type: String, 
        required: true,
       
        
    },
    fullname: { 
        type: String, 
        required: true,
      
 
    },
    email: { 
        type: String, 
        required: true,
       
       
    },
    phone: { 
        type: String, 
        required: true,
   
        
    },
    image: { 
        type: String, 
        default: '',
     },
    role: {
        type: String, 
        required: true,
       
    },
    slug: {
        type:String, 
        slug:'username',
        unique: true},
    verify:{
        type:Boolean,
        default:false,
    }    
    },
    {_id: false,
    timestamps: true
});

module.exports = mongoose.model('User',User);