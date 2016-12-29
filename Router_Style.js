
var express = require('express');
var loginAPI = express.Router();

var isLogin=false;
// 進入需要驗證的頁面...
loginAPI.get('/',function(req,res){
    // ...    
});

// 表單送出後...
loginAPI.post('/post', function(req, res) {
    // ...
 
});

// 登出...
loginAPI.get('/logout', function(req, res) {
    // ...
 
});

module.exports = loginAPI;