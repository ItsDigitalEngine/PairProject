const {Staff, Event, EventStaff} = require('../models')

class EventStaffController {
    static getAdd(req, res) {
        res.render('assigneventstaff')
    }
    static postAdd(req, res) {
        EventStaff.create({
            EventName: req.body.event,
            StaffName: req.body.staff,
            role: req.body.role
        })
        .then(eventstaff => {
            res.redirect('/eventstaff')
        })
        .catch(err => {
            res.send(err)
        })

    }
}

module.exports = EventStaffController