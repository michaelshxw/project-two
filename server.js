//import global modules    
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const cookieParser = require('cookie-parser');
const sessions = require('express-sessiosn');

//import local modules
const sequelize = require('./config/connection');
//routers
const homeRouter = require('./routes/index');
const userRouter = require('./routes/users');
const recipesRouter = require('./routes/recipes');
const loggedInRouter = require('./routes/loggedin');

// assign express object
const app = express(); //app being convention for Express() 
const PORT = process.env.PORT || 8000;

//setup sessions management middleware
app.use(cookieParser());
app.use(session({secret: "Can we have an A please?"}));

//enable the handlebars engine setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public'))); // retrieve css and js files automatically

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',homeRouter);//middleware to run homeRouter on request to homepage.
app.use('/users',userRouter);//middleware to run userRouter on request to /users.
app.use('/recipes',recipesRouter);//middleware to run userRouter on request to /recipes.
app.use('/loggedin',loggedInRouter); //middleware to run loggedInRouter on request to /loggedin

  app.listen(PORT, () => 
  {
    sequelize.authenticate()
    .then(() =>
    {
      console.log("Database connected")
    })
    .catch((err) => {console.log("error", err)});
  })
 









