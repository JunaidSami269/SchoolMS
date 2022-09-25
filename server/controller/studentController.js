const express = require("express");
const mongoose = require('mongoose');
const Student = require("../model/student")


//creating router
var router = express.Router();

router.get("/", (req, res) => {
    res.render("students/addOrEdit", {
        viewTitle: "insertStudent"
    })
})

router.post("/", (req, res) => {
    insertRecord(req, res)
    //console.log(req.body);

})

//insert student data in db
function insertRecord(req, res) {
    let student = new Student();

    student.fname = req.body.first_name;
    student.lname = req.body.last_name;
    student.dob = req.body.dob;
    student.grade = req.body.grade;
    student.department = req.body.department;
    student.mobile = req.body.mobile;

    student.save((err, doc) => {
        if (!err)
        res.redirect('student/list');
    else {
        console.log(err);
    }
    })

}

//list router
router.get("/list", (req, res) => {
    res.json("formlist")
})

router.get("/test", (req, res) => {
    res.json("testing")
})




//exporting router
module.exports = router;