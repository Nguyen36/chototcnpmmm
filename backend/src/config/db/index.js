const mongoose = require('mongoose');
//const dotenv = require('dotenv')
//dotenv.config();

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://admin:0399344780nguyen@cluster0.n212e.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log("Ok Connected to mongose")
    } catch (error) {
        console.log(error)
    }
}
 
module.exports = {connect };