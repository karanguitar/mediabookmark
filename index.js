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

sequelize.sync()
.then(result =>{
    app.listen(PORT, console.log(`Server started on port ${PORT}`)) 
    console.log(result)
})
.catch(err => console.log("error: ",err))
