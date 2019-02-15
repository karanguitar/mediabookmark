const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')

const Keys = require('./keys/keys')

const sequelize = require('./database/database')
require('./services/passport')
const User = require('./models/user')
const Media = require('./models/media')

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

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

//PORT

const PORT = process.env.PORT || 5000 

Media.belongsTo(User)

sequelize
  .sync()
  .then(result => {
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });
