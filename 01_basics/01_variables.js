const accountID = 1443432
let accountEmail = "nitika0904@gmail.com"
var accountPassword = "12345"
accountCity = "barnala"
let accountState; 
//if no value os given then its zero by deafult


// accountID = 2 //not allowed
accountEmail = "nb12@gmail.com"
accountPassword = "2323"
accountCity = "abc"


/*
prefer not to use var 
bcoz of issue in block scope and functional scope
*/ 
console.log([accountID, accountEmail, accountPassword, accountCity]);
console.table([accountID, accountEmail, accountPassword, accountCity]);
