const express = require("express");



//creating router
var router = express.Router();
 
router.get("/",(req,res)=>{
    res.render("students/addOrEdit",{
        viewTitle: "insertStudent"
    })
})

//exporting router
module.exports= router;