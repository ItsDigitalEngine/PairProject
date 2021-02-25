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
        res.render('addStaff')
    }
    static postAdd(req, res) {
        Staff.create()
    }
    static getEdit(req, res) {

    }
    static postEdit(req, res) {

    }
    static getDelete(req, res) {
        
    }
}

module.exports = StaffController