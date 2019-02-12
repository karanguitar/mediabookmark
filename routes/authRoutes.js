const express = require('express')
const passport = require('passport')

const authController = require('../controllers/authController')



const router = express.Router()


router.get('/api/auth/google', authController.googleFlow)

router.get('/api/auth/google/callback', 
            passport.authenticate('google'),
            (req, res, next) =>{
                res.redirect('/')
            })

router.get('/api/logout', authController.logout)

router.get('/api/current_user', authController.currentUser)




module.exports = router