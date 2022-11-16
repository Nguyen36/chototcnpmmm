var express = require('express')
var router = express.Router()

const productController = require('../../app/controllers/common/ProductController.js')
const  {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndUserAuthorization,
    verifyTokenAndSeller,
    }= require('../../app/controllers/common/verifyController.js')

//local/product/all
//GET ALL USERS
router.get("/all",  productController.getAllProduct);

router.get("/getbyseller/:id", productController.getProductBySeller);


router.get("/getTop5", productController.getTop5Product);

router.get("/category/:id", productController.getCategory1);

//DELETE PRODUCT
router.delete("/delete/:id", verifyTokenAndSeller, productController.deleteProduct);

router.get("/getbyslug/:slug", productController.getProductBySlug);

router.get("/get/:id", productController.getProduct);

router.put("/edit/:id", verifyTokenAndSeller, productController.update);

router.post("/new", productController.newProduct);

router.get("/getLength",productController.getProductLength)

router.get("/search",productController.search)

router.post("/searchbyname",productController.searchByName)

router.get("/getLastest",productController.getLastestProductId)


module.exports = router;