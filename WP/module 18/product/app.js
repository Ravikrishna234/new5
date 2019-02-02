var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine','ejs');
app.get('/',function(req,res) { 
    res.render('index');
})

app.listen(8080);