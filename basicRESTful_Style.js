var express = require('express');
var app = express();

//set view engine
app.set("view engine","jade")
//set view directory
app.set("views",__dirname+"/views")

//將request進來的data 轉成 json()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create a router to handle routes for a set of RestAPI
var RestAPI = express.Router();

// CREATE (/restful/todo)
RestAPI.post('/todo', function(req, res) {
    // ...
});

// READ ALL & FORM (/restful/todo)
RestAPI.get('/todo',function(req,res){
    // ...
});

// READ (/restful/todo/:id)
RestAPI.get('/todo/:id', function(req, res) {
    // ...
});

// UPDATE ((/restful/todo/:id))
RestAPI.put('/todo/:id', function(req, res) {
    // ...
});

// DELETE (/restful/todo/:id)
RestAPI.delete('/todo/:id', function(req, res) {
    // ...
});


// Apply this router on (/restful)
app.use('/restful', RestAPI);

//static file like .js, .json, .xml, html....
app.use('/restful',express.static(__dirname+'/public'));

app.listen(3000,function(){
	console.log('Ready...for 3000');
});