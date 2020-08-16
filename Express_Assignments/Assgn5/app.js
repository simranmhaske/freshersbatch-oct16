var express=require('express');
var bodyparser=require('body-parser');
var app=express();

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:false}));

app.get('/form',function(req,res){
    res.render('form');
})

app.post('/form',function(req,res){
    var reversed=req.body.str.split('').reverse().join('');
    res.render('index',{reversedString:reversed});
})

app.listen(3000);