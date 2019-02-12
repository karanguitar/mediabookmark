const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')

const Keys = require('./config/keys')

const sequelize = require('./database/database')
require('./services/passport')

const projectRoutes = require('./routes/projectRoutes')
const authRoutes = require('./routes/authRoutes')

const app = express()

//cookies
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [Keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())


//Middleware
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

//Routes
app.use(authRoutes)
app.use(projectRoutes)

//PORT

const PORT = process.env.PORT || 5000 

sequelize
  .sync()
  .then(result => {
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });
