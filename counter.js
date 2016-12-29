var express = require('express');
// 首先引入 express-session 
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var app = express();

// 按照上面的解釋，設置 session 相關參數
app.use(session({
  secret: 'recommand 128 bytes random string', 
  store:new MongoStore({url:'mongodb://localhost:27017/sessiondb'}),
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 1000 } //1分鐘到期
}));

app.get('/', function (req, res) {

  // 檢查 session 中的 isVisit 字段
  // 如果存在則增加一次，否則為 session 設置 isVisit ，並初始化為 1。
  if(req.session.isVisit) {
    res.send('<p>歡迎再次來訪</p>');
    req.session.isVisit++;
    req.session.other++;
    res.send('<p>第 ' + req.session.isVisit + '次來此頁面</p>'+req.session.other);
  } else {
    req.session.isVisit = 1;
    req.session.other=1;
    res.send("歡迎第一次到訪");
    console.log(req.session);
  }
});
app.listen(3000,function(){
    console.log('Ready for 3000...');
});