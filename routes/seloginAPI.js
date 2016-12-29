var express = require('express');
var seloginAPI = express.Router();

var isLogin=false;
// 進入需要驗證的頁面...
seloginAPI.get('/',function(req,res){
    // ...    
    var name='guest';
    isLogin=false;
    var Logtime=1;    
	if(req.session.firstName && req.session.lastName){
        name=req.session.firstName+ ' '+req.session.lastName;
        isLogin = true;
        Logtime= req.session.time; 
    }
     
     res.render('index', { title: 'Express', member:name, logstatus:isLogin,time:Logtime });
});

// 表單送出後...
seloginAPI.post('/post', function(req, res) {
    // ...
    if(req.body.firstName=="" || req.body.lastName=="")
    {
        return res.redirect('Login.html');
    }else if(req.body.firstName==req.session.firstName 
                 && req.body.lastName==req.session.lastName) //如果輸入的,在session已有儲存..
    {    
         req.session.time++; //同一連線的登入次數, 就加 1
         return res.redirect('/session');    //就直接導向到...
    }
    else
    {   
        //session store裡沒有的，就會重新設置 	
    	req.session.firstName=req.body.firstName;
        req.session.lastName=req.body.lastName; 
        req.session.time=1;     
          return res.redirect('/session');
    }
   
});

// 登出...
seloginAPI.get('/logout', function(req, res) {

    req.session.destroy();
	return res.redirect('/session');
});

module.exports = seloginAPI;