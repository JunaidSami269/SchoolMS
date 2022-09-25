require("./server/database/connection")

const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');
const studentController = require("./server/controller/studentController");
const bodyparser = require('body-parser');

//creating express app
var app = express();

//adding bodyparser to app
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

//setting handle bars as view engine
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

//creating server
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use("/student", studentController);