var fs=require('fs');
var express=require('express');
var app=express();
var name=process.argv[2];
var port = process.argv[3]

var object;
var readFile=fs.readFile(name,'utf8',function(err,data){
    var test=data.toString();
     object=JSON.parse(test);
});

app.get('/data',function(req,res){
    res.json(object);
})

app.listen(port,function(){
    console.log("App running on port: "+port)
});