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
    if (req.body.id == "") {

        insertRecord(req, res)
    } else {
        updateRecord(req, res);
    }

})

//insert student data in db
function insertRecord(req, res) {
    let student = new Student();

    student.fname = req.body.fname;
    student.lname = req.body.lname;
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

//update student data
function updateRecord(req, res) {
    Student.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('student/list'); }else{
            console.log('Error during record update : ' + err)
        }
    });

}

//delete student
router.get('/delete/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/student/list');
        }
        else { console.log('Error in studentndelete :' + err); }
    });
});

//list router
router.get("/list", (req, res) => {
    Student.find((err, docs) => {
        if (!err) {
            res.render("students/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    }).lean();
})


//update list router
router.get("/:id", (req, res) => {
    Student.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("students/addOrEdit",
                {
                    viewTitle: "Update Record",
                    student: doc

                })
        }
    }).lean();
});





//exporting router
module.exports = router;