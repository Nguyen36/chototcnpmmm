const express = require('express');
const morgan = require('morgan');

const path = require('path')
const helmet = require('helmet')
const passport = require('passport')
const {Strategy} = require('passport-google-oauth20')
const cookieSession = require('cookie-session')
// const methodOverride = require('method-override')
// const { engine } = require('express-handlebars');

const route = require('./routes')

const db = require('./config/db');
const { header } = require('express/lib/request');

const cookieParser= require('cookie-parser')
const cors = require('cors');
const app = express();
const port = 8000;

require('dotenv').config()

const config = {
    CLIENT_ID : process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_KEY_1:process.env.COOKIE_KEY_1,
    COOKIE_KEY_2:process.env.COOKIE_KEY_2
}
const AUTH_POTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
}

function verifyCallback(accesssToken, refreshToken, profile,done){
    console.log('Google profile',accesssToken)
    console.log('Google profile',profile)
    done(null, profile)
}

//Login

//Middleware

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// HTTP logger

app.use(helmet());
app.use(cookieSession({
    name: 'session',
    maxAge: 60*60*1000*24,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2]
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/auth/google',passport.authenticate('google',{
    scope: ['email']
}))

app.get('/auth/google/callback',passport.authenticate('google',{
    failureRedirect:'/failure',
    successRedirect:'http://localhost:3000/',
    session: true
}),(req,res)=>{
    console.log('Goole called us back!')
})


passport.use(new Strategy(AUTH_POTIONS,verifyCallback))

// Save the session to the cookie
passport.serializeUser((user,done)=>{
    done(null,user)
})

//Read the session from the cookie
passport.deserializeUser((id, done)=>{
    // User.findById(id).then(user=>{
    //     done(null,user)
    // })
    done(null,id)
})
// Routes init
app.use(morgan('combined'))


app.use(cookieParser())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors({origin: ['http://127.0.0.1:3000','http://localhost:3000']}))
route(app);

// DB
db.connect();

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})



// Static file
// app.use(express.static( path.join(__dirname, 'public')))

// Template Engine
// app.engine('hbs', engine({
//     extname:'.hbs',
//     defaultLayout:'main',
//     helpers: {
//       sum: (a,b) => a+b,
//     }
// }),);
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'resources/views'));


// // Method override
// app.use(methodOverride('_method'))





