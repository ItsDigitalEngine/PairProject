const express = require('express')
const router = express.Router()
const StaffController = require('../controllers/staffController')

router.get('/', StaffController.findAll)

router.get('/add', StaffController.getAdd)
router.post('/add', StaffController.postAdd)

router.get('/edit/:id', StaffController.getEdit)
router.post('/edit/:id', StaffController.postEdit)

router.get('/delete/:id', StaffController.getDelete)

module.exports = router