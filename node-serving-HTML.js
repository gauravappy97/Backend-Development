const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('index.html') 


// making a server for serving my index.html file
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.end(fileContent)
})
server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80")
})