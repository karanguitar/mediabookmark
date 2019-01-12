const express = require('express')

const router = express.Router()

const projectController = require('../controllers/projectController')


router.get('/', projectController.testPage)

module.exports = router