var pug_path=process.argv[2];

var path=require('path');
var express=require('express');

var app=express();

app.set('view engine', 'pug');


app.set('views', path.join(__dirname, 'Views'));

app.get('/home',function(req,res){
   
    res.render(pug_path, {date: new Date().toDateString()});
});

app.listen(3000);
