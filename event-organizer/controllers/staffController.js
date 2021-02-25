const {Staff} = require('../models')

class StaffController {
    static findAll(req, res) {
        Staff.findAll()
        .then (staffs => {
            res.render('staff', {staffs : staffs})
        })
        .catch (err => {
            res.send(err)
        })
    }
    static getAdd(req, res) {
        res.render('addstaff')
    }
    static postAdd(req, res) {
        Staff.create({
            name: req.body.name,
            gender: req.body.gender,
            email: req.body.email,
            password: req.body.password
        })
        .then(staff => {
            res.redirect('/staff')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static getEdit(req, res) {
        Staff.findByPk(req.params.id)
            .then(staff => {
                res.render('editstaff', {
                    staff
                })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static postEdit(req, res) {
        Staff.update({
            name: req.body.name,
            gender: req.body.gender,
            email: req.body.email
        },
        {
            where: {id: req.params.id}
        })
        .then(staff => {
            res.redirect('/staff')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static getDelete(req, res) {
        Staff.destroy({
            where: {id: req.params.id}
        })
        .then(staff => {
            res.redirect('/staff')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = StaffController