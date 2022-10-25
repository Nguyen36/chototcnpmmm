var express = require('express')
var router = express.Router()

const oderdetailController = require('../../app/controllers/common/OderDetailController.js')
const  {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndUserAuthorization,
    verifyTokenAndSeller,
    }= require('../../app/controllers/common/verifyController.js')

//local/oder/all
//GET ALL USERS


router.get("/all", oderdetailController.getAllOderDetail);

//DELETE USER
router.delete("/delete/:id", oderdetailController.deleteOderDetail);

router.get("/get/:id", oderdetailController.getOderDetail);

router.put("/edit/:id", oderdetailController.update);

router.post("/new", oderdetailController.newOder);

router.get("/getLength",oderdetailController.getOderDetailLength)


module.exports = router;