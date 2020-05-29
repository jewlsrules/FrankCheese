//----------------------
//Dependencies
//----------------------
const express = require('express');
const app = express();
const session = require('express-session') //for cookies
const PORT = 8080;

//----------------------
//Middleware
//----------------------
//setting up cookies
app.use(session({
  secret:'franklovescheeseyumyum',
  resave:false,
  saveUninitialized:false
}))

//use public folder for static assets
app.use(express.static('public'));

//----------------------
// Routes
//----------------------


//----------------------
// Listener
//----------------------
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
