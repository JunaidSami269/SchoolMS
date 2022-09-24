require("./server/database/connection")

const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');
const studentController = require("./server/controller/studentController");


var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use("/student", studentController);