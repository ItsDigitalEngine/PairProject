const express = require('express')
const router = express.Router()
const eventRouter = require('./eventRouter.js')
const staffRouter = require('./staffRouter.js')
const eventStaffRouter = require('./eventStaffRouter.js')

router.get('/', (req, res) => {
    res.render('home')
})

router.use('/event', eventRouter)

router.use('/staff', staffRouter)

router.use('/eventstaff', eventStaffRouter)

module.exports = router