const {Event} = require('../models')

class EventController {
    static findAll(req, res) {
        Event.findAll()
        .then (events => {
            res.render('events', {events : events})
        })
        .catch (err => {
            res.send(err)
        })
    }
    static getAdd(req, res) {
        res.render('addEvent')
    }
    static postAdd(req, res) {
        Event.create()
    }
    static getEdit(req, res) {

    }
    static postEdit(req, res) {

    }
    static getDelete(req, res) {
        
    }
}

module.exports = EventController