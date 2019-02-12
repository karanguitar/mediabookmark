const express = require('express')

const router = express.Router()

const projectController = require('../controllers/projectController')


router.get('/api/all-media', projectController.getMedia)
router.post('/api/create/media', projectController.postMedia)
router.get('/api/single-media/:id', projectController.getSingleMedia)
router.delete('/api/delete-media/:id', projectController.deleteMedia)
router.get('/api/edit-media/:id', projectController.getEditMedia)
router.post('/api/edit-media/:id', projectController.postEditMedia)


module.exports = router