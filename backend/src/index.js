const express = require('express');
const morgan = require('morgan');

// const methodOverride = require('method-override')

const path = require('path');
// const { engine } = require('express-handlebars');

const route = require('./routes')

const db = require('./config/db');
const { header } = require('express/lib/request');

const cookieParser= require('cookie-parser')
const cors = require('cors');
const app = express();
const port = 8000;
//Login

//Middleware

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// HTTP logger
app.use(morgan('combined'))
app.use(cors({origin: ['http://127.0.0.1:3000','http://localhost:3000']}))

app.use(cookieParser())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// Routes init

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




