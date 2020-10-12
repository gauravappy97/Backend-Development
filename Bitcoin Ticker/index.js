const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});


app.post('/', function(req, res){
    crypto = req.body.crypto;
    fiat = req.body.fiat;
    baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    finalURL = baseURL+crypto+fiat;
    request(finalURL, function(error,response,body){
        var data = JSON.parse(body);
        var price = data.last;
        res.write("<p> The current data is" + currenDate + "</p>");
        res.write("<h1> The current price of" + crypto + " is " + price + fiat + "</h1>");
        res.send()
    });
});
app.listen(5500,function(){
    console.log('server is running on 5500')
});