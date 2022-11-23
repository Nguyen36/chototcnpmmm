const User = require('../../models/User');
const bcrypt = require('bcrypt');
const { promise } = require('bcrypt/promises');
const jwt = require('jsonwebtoken')

class UserController {

    // [GET] /user/all
    async getAllUser(req,res,next){
       
        User.find({})
            .then(user =>{
                res.status(200).json(user);
                    
            })
            .catch(()=>{
                res.status(500).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

    // [delete] /user/delete/:id
    async deleteUser(req,res){
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User deleted");
          } catch (err) {
           return res.status(500).json(err);
          }
        }
     // [GET] /user/get/:id
    async getUser(req,res,next){
        console.log("req.params.id")
        try{
            const user = await User.findById(req.params.id)
            res.status(200).json(user) 
        }
        catch(err){
            console.error(err);
        }          
    }
     //[PUT]  /user/edit/:id
     async update (req,res,next){
        const formData = req.body;
        const salt = await bcrypt.genSalt(10);
        if(formData.password){
            formData.password = await bcrypt.hash(formData.password, salt);
        }
        console.log(formData);
        console.log(req.params.id);

        await  User.updateOne({_id: req.params.id},formData)
            .then(() => {
                res.status(200).json('Updated Success')
            })
            .catch((err) =>{
                return res.status(500).json(err);
            })
        
    }

    async getUserLength(req,res){
    
        await User.find().count()
            // await User.aggregate( [
            //     { $count: 'username'  }
            // ])
            .then((user)=> res.status(200).json(user))
            .catch((err) =>{
                return res.status(500).json(err);
            })
    }
}

module.exports = new  UserController();