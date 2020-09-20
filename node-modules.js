//modules: Consider modules to be the same as JavaScript libraries.
//         A set of functions you want to include in your application.
const fs = require('fs');
let text = fs.readFileSync("test.txt","utf-8");
text = text.replace("read and write","only read and write")

console.log(text)
console.log("creating a new file.....")
fs.writeFileSync("replaces_text.txt",text)