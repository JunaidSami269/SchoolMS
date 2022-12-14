const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    id: mongoose.ObjectId,
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String
    },
    dob: {
        type: Date
    },
    grade: {
        type: String
    },
    department: {
        type: String
    },
    dateofjoin: {
        type: Date
    },
    mobile: {
        type: String
    },
    status: {
        type: Boolean
    },
    salary:{
        type:Number
    }
});

const teacherModel = mongoose.model("teacher", schema);

module.exports = teacherModel;