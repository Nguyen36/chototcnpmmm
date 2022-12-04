 var express = require('express')
var router = express.Router()

const userController = require('../../app/controllers/common/UserController.js')
const  {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndUserAuthorization,
    verifyTokenAndSeller,
    }= require('../../app/controllers/common/verifyController.js')

//local/user/all
//GET ALL USERS
router.get("/all", verifyTokenAndUserAuthorization, userController.getAllUser);

//DELETE USER
router.delete("/delete/:id", verifyTokenAndUserAuthorization, userController.deleteUser);

router.get("/get/:id",  userController.getUser);

router.put("/edit/:id", userController.update);

router.get("/getLength", userController.getUserLength);

router.post("/favorite/add/:id", userController.addFavorite);

router.post("/favorite/delete/:id", userController.deleteFavorite);


router.get("/favorite/get/:id", userController.getFavorite);


module.exports = router;