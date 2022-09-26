const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    id: mongoose.ObjectId,
    fname: {
        type: String,
        
    },
    lname: {
        type: String
    },
    dob: {
        type: String
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


