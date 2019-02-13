const express = require('express')
const requireLogin = require('../middleware/requireLogin')

const router = express.Router()

const projectController = require('../controllers/projectController')


router.get('/api/all-media', requireLogin, projectController.getMedia)
router.post('/api/create/media', requireLogin, projectController.postMedia)
router.get('/api/single-media/:id', requireLogin, projectController.getSingleMedia)
router.delete('/api/delete-media/:id', requireLogin, projectController.deleteMedia)
router.get('/api/edit-media/:id', requireLogin, projectController.getEditMedia)
router.post('/api/edit-media/:id', requireLogin, projectController.postEditMedia)


module.exports = router