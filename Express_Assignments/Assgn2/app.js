var express = require('express')

var app=express();
const todaysDate = new Date()

app.get('/year',function(req,res){
const currentYear = todaysDate.getFullYear()
var year=currentYear-req.query.age;
res.send('You were born in '+year)
});
app.listen(3000);