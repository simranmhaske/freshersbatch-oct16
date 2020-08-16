var express = require('express')

var app = express();
const port = process.env.PORT || 8000;

app.get('/',function(req,res){
    res.send("Hello World");
})

app.get('/time',function(req,res){
    const todaysDate = new Date()
    res.send(todaysDate);
})

app.listen(port,function(){
    console.log('App listening on port:' +port)
});

//how to set port
//$env:PORT=1337
//node app.js