var express = require('express');
var cookieParser = require('cookie-parser');
// 引入 express-session 
//var session = require('express-session');
var bodyParser = require('body-parser');
var routerCookie=require('./routes/loginAPI');

var app = express();

//set view engine
app.set("view engine","jade")
//set view directory
app.set("views",__dirname+"/views")

//將request進來的data 轉成 json()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// sign for cookie
app.use('/cookie', cookieParser('123456789'));

// Create a router to handle routes for a set of loginAPI
// 抓出來, 變成獨立檔案
// -------------------------------------------------------

//static file like .js, .json, .xml, html....
app.use(express.static(__dirname+'/public'));

// Apply this router on (/cookie)
app.use('/cookie', routerCookie);

app.listen(3000,function(){
	console.log('Ready...for 3000');
});
