const authRouter = require('./common/auth')
const userRouter = require('./common/user')
const productRouter = require('./common/product')
const oderRouter = require('./common/oder')
const oderDetailRouter = require('./common/oderdetail')
const imageRouter = require('./common/image')

function route(app){
 
    app.use('/login',authRouter)

    app.use('/user',userRouter)
     
    app.use('/product',productRouter)
      
    app.use('/oder',oderRouter)

    app.use('/oderdetail',oderDetailRouter)

    app.use('/image',imageRouter)
}

module.exports = route;