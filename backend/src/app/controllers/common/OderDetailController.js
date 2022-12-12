const OderDetail = require('../../models/OderDetail');

class OderDetailController {

    // [GET] /oderDetail/all
    async getAllOderDetail(req,res,next){
       
        OderDetail.find({})
            .then(oderDetail =>{
                res.status(200).json(oderDetail);
                    
            })
            .catch(()=>{
                res.status(400).json(err);
            })
        
        // res.send('detail'+req.params.slug)    
    }

    // [delete] /oderDetail/delete/:id
    async deleteOderDetail(req,res){
        try {
            await OderDetail.findByIdAndDelete(req.params.id);
            res.status(200).json("OderDetail deleted");
          } catch (err) {
           return res.status(400).json(err);
          }
        }
     // [GET] /oderDetail/get/:id
    async getOderDetail(req,res,next){
        await OderDetail.findById(req.params.id)
        .then(oderDetail =>{
            res.status(200).json(oderDetail) 
        })
        .catch(next)
        
        
    }
     //[PUT]  /oderDetail/edit/:id
     async update (req,res,next){
        await  OderDetail.updateOne({_id: req.params.id},req.body)
            .then(() => res.status(200).json('Updated Success'))
            .catch(next)
        
    }

      //  [POSt] /Product/new
      async newOder  (req, res, next){
        const formData= req.body
        
        const newOder = new OderDetail(formData)

        newOder.save()
            .then(() => res.status(200).json(newOder))
            .catch(error => {
                res.status(400).json(error)
            })
        
    }

    async getOderDetailLength(req,res){
        await OderDetail.find().count()
            .then((user)=> res.status(200).json(user))
            .catch((err) =>{
                return res.status(400).json(err);
            })
    }

}

module.exports = new  OderDetailController();