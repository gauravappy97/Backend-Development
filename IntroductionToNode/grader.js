function average(mylist){
    var lenoflist = mylist.length
    var total = 0
    mylist.forEach(function(mylist) {
        total+=mylist
    });
    return Math.round(total/lenoflist)
}

var mylist = [90,98,89,100,100,86,94]
console.log('average score is:', average(mylist))