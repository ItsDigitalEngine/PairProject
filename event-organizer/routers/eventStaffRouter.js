const express = require('express')
const router = express.Router()
const EventStaffController = require('../controllers/eventStaffController')

router.get('/', EventStaffController.findAll)

router.get('/add', EventStaffController.getAdd)
router.post('/add', EventStaffController.postAdd)

router.get('/edit/:id', EventStaffController.getEdit)
router.post('/edit/:id', EventStaffController.postEdit)

router.get('/delete/:id', EventStaffController.getDelete)

module.exports = router