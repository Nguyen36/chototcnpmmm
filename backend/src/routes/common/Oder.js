var express = require('express')
var router = express.Router()

const oderController = require('../../app/controllers/common/OderController.js')
const  {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndUserAuthorization,
    verifyTokenAndSeller,
    }= require('../../app/controllers/common/verifyController.js')

//local/oder/all
//GET ALL USERS
router.get("/getseller/:id",verifyTokenAndSeller, oderController.getAllOderByIdSeller);

router.get("/getbyid/:id",verifyTokenAndUserAuthorization, oderController.getAllOderById);

router.get("/all",verifyTokenAndUserAuthorization, oderController.getAllOder);


//DELETE USER
router.delete("/delete/:id", verifyTokenAndUserAuthorization, oderController.deleteOder);

router.get("/get/:id", verifyTokenAndUserAuthorization, oderController.getOder);

router.put("/edit/:id", oderController.update);

router.post("/new", oderController.newOder);

router.get("/getFull/:id", oderController.getFullOder);

router.get("/getLength",oderController.getOderLength)


module.exports = router;