const {Staff, Event, EventStaff} = require('../models')

class EventStaffController {
    static findAll(req, res) {
        EventStaff.findAll()
        .then (eventStaffs => {
            res.render('eventStaff', {eventStaffs : eventStaffs})
        })
        .catch (err => {
            res.send(err)
        })
    }
    static getAdd(req, res) {
        res.render('addEventStaff')
    }
    static postAdd(req, res) {
        EventStaff.create()
    }
    static getEdit(req, res) {

    }
    static postEdit(req, res) {

    }
    static getDelete(req, res) {
        
    }
}

module.exports = EventStaffController