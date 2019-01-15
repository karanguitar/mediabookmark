const express = require('express')

const router = express.Router()

const projectController = require('../controllers/projectController')


router.get('/media', projectController.getProducts)

module.exports = router