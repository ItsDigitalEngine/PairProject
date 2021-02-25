const express = require('express')
const router = express.Router()
const EventController = require('../controllers/eventController')

router.get('/', EventController.findAll)

router.get('/add', EventController.getAdd)
router.post('/add', EventController.postAdd)

router.get('/edit/:id', EventController.getEdit)
router.post('/edit/:id', EventController.postEdit)

router.get('/delete/:id', EventController.getDelete)

module.exports = router