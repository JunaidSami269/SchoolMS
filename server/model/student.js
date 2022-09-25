const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    id: mongoose.ObjectId,
    fname: {
        type: String,
        required: "This field is required"
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
    mobile: {
        type: String
    }
});

const studentModel = mongoose.model("student", schema);

module.exports = studentModel;


