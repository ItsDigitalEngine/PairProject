const {Event} = require('../models')

class EventController {
    static findAll(req, res) {
        Event.findAll()
        .then (events => {
            res.render('event', {events : events})
        })
        .catch (err => {
            res.send(err)
        })
    }
    static getAdd(req, res) {
        res.render('addevent')
    }
    static postAdd(req, res) {
        Event.create({
            name: req.body.name,
            location: req.body.location,
            date: req.body.date
        })
        .then(event => {
            res.redirect('/event')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static getEdit(req, res) {
        Event.findByPk(req.params.id)
            .then(event => {
                res.render('editevent', {
                    event
                })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static postEdit(req, res) {
        Event.update({
            name: req.body.name,
            location: req.body.location,
            date: req.body.date
        },
        {
            where: {id: req.params.id}
        })
        .then(event => {
            res.redirect('/event')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static getDelete(req, res) {
        Event.destroy({
            where: {id: req.params.id}
        })
        .then(event => {
            res.redirect('/event')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = EventController