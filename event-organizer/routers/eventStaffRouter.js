const express = require('express')
const router = express.Router()
const EventStaffController = require('../controllers/eventStaffController')

router.get('/assign', EventStaffController.getAdd)
router.post('/assign', EventStaffController.postAdd)

module.exports = router