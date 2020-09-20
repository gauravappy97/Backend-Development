var faker = require("faker");

var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
var randomCard = faker.helpers.createCard();

// console.log(randomName)
// console.log(randomEmail)
// console.log(randomCard)
console.log('=========================================')
console.log('Welcome to my shop')
console.log('=========================================')
for(var i=0;i<10;i++){
    console.log(faker.commerce.productName()+' - $'+faker.commerce.price())
}
