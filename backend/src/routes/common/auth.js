var express = require('express')
var router = express.Router()

const authController = require('../../app/controllers/common/AuthController')


const  {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndUserAuthorization,
    verifyTokenAndSeller,
    }= require('../../app/controllers/common/verifyController.js')


const user = require('../../app/models/User')
//form register
router.post('/register',authController.register)
//form login
router.post('/',authController.login)
//REFRESH TOKEN
router.post("/refresh", authController.requestRefreshToken);
//LOG OUT
router.post("/logout", verifyToken, authController.logOut);

router.post('/auth',authController.loginGoogle)
module.exports = router;