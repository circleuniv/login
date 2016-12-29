var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

//set view engine
app.set("view engine","jade")
//設定view的路徑
//app.set("views",__dirname+"/views")

//將request進來的data 轉成 json()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//靜態檔案服務 like .js, .json, .xml, html....
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
	res.send('/測試路由');
});

app.listen(3000,function(){
	console.log('Ready...for 3000');
});