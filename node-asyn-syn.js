// Synchronous or blocking: line by line execution

const fs = require('fs');
let text = fs.readFileSync("test.txt","utf-8");
text = text.replace("read and write","only read and write")

// Asynchronous or non-blocking: line by line execution not guranteed but codes are executed on callbacks when fired.

const fs = require('fs');
let text = fs.readFile("test.txt","utf-8",(data)=>{
    console.log(data)
});
console.log("This is a message")