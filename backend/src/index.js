const express = require('express');
const morgan = require('morgan');

// const methodOverride = require('method-override')

const path = require('path');
// const { engine } = require('express-handlebars');

const route = require('./routes')

const db = require('./config/db');
const { header } = require('express/lib/request');

const cors= require('cors')
const cookieParser= require('cookie-parser')

const app = express();
const port = 8000;
//Login

//Middleware

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


// HTTP logger
app.use(morgan('combined'))

// Routes init
route(app);

// DB
db.connect();


app.use(cors())
app.use(cookieParser())


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




