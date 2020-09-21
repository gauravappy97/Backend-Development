var express = require('express');
var app = express()
app.get('/', function(req,res){
    res.send('Hi there!')
});
app.get('/bye',function(req,res){
    res.send('Goodbye!')
})
app.listen(5500, function(){
    console.log('Server has started...........')
})