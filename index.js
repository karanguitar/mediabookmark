const express = require('express')
const bodyParser = require('body-parser')

const projectRoutes = require('./routes/projectRoutes')

const sequelize = require('./database/database')

const app = express()

//Middleware
app.use(bodyParser.urlencoded({extended: false}))


//Routes
app.use(projectRoutes)

const PORT = process.env.PORT || 5000 

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });