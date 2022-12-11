const Oder = require('../../models/Oder');
const OderDetail = require('../../models/OderDetail')
const mongoose = require('mongoose')


class OderController {

    // [GET] /oder/all
    async getAllOder(req,res,next){
       
        Oder.find({})
            .populate('customer_id')
            .populate('pay_id')
            .populate('status')
            .then(oder =>{
                res.status(200).json(oder);
                    
            })
            .catch(()=>{
                res.status(400).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

    // [delete] /oder/delete/:id
    async deleteOder(req,res){
        try {
            await Oder.findByIdAndDelete(req.params.id);
            res.status(200).json("Oder deleted");
          } catch (err) {
           return res.status(400).json(err);
          }
        }
     // [GET] /oder/get/:id
    async getOder(req,res,next){
        await Oder.findById(req.params.id)
        .then(oder =>{
            res.status(200).json(oder) 
        })
        .catch(next)
        
        
    }
     //[PUT]  /oder/edit/:id
     async update (req,res,next){
        await  Oder.updateOne({_id: req.params.id},req.body)
            .then(() => res.status(200).json('Updated Success'))
            .catch(next)
        
    }
     //  [POSt] /Product/new
     async newOder  (req, res, next){
        const formData= req.body
        
    
        const newOder = new Oder(formData)

        newOder.save()
            .then(() => res.status(200).json(newOder))
            .catch(error => {
                res.status(400).json(error)
                console.log(error)
            })
        
    }

  //  [POSt] /
  async getFullOder  (req, res, next){

    
    OderDetail.find({oder_id:req.params.id})
        .populate('oder_id')
        .populate({
            path: 'oder_id',
            populate: {path:'customer_id'},
            
        })
        .populate({
            path: 'oder_id',
            populate: {path:'seller_id'},
            
        })
       
        .populate('product_id')
        .then((oder) => {
            console.log(req.params.id)
            console.log(oder)
            res.status(200).json(oder)
        })
        .catch(error => {
            res.status(400).json(error)
            console.log(error)
        })
    
    }
    // [GET] /oder/all
    async getAllOderById(req,res,next){
       
        Oder.find({customer_id:req.params.id})
           // .populate('seller_id')
           .populate('customer_id')
           .populate('pay_id')
           .populate('status')
            .then(oder =>{
                res.status(200).json(oder);
                    
            })
            .catch(()=>{
                res.status(400).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

     // [GET] /oder/all
     async getAllOderByIdSeller(req,res,next){
       
        Oder.find({seller_id:req.params.id})
           // .populate('seller_id')
           .populate('customer_id')
           .populate('pay_id')
           .populate('status')
            .then(oder =>{
                res.status(200).json(oder);
                    
            })
            .catch(()=>{
                res.status(400).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

    async getOderLength(req,res){
        await Oder.find().count()
            .then((user)=> res.status(200).json(user))
            .catch((err) =>{
                return res.status(400).json(err);
            })
    }

}

module.exports = new  OderController();