var express = require('express');
// 引入 express-session 
var session = require('express-session');
// session store
const MongoStore = require('connect-mongo')(session); 
var bodyParser = require('body-parser');
var routerSession=require('./routes/seloginAPI');

var app = express();

//設置session相關設定
app.use("/session",session({
  secret: 'recommand 128 bytes random string', 
  store:new MongoStore({url:'mongodb://localhost:27017/sessiondb'}),
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600 * 1000 } //10分鐘到期

}));

//set view engine
app.set("view engine","jade")
//set view directory
app.set("views",__dirname+"/views")

//將request進來的data 轉成 json()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Create a router to handle routes for a set of seloginAPI
// 抓出來, 變成獨立檔案
// -------------------------------------------------------

//static file like .js, .json, .xml, html....
app.use(express.static(__dirname+'/public'));

// Apply this router on (/cookie)
app.use('/session', routerSession);

app.listen(3000,function(){
	console.log('Ready...for 3000');
});