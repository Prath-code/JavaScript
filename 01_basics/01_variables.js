const accountId = 219007;
let accountEmail = "askforvarn@gmail.com";
var accountPassword = "12345";
accountCity = "Surat";
// This can be possible but it is not a good practice to make a variable without a keyword in front of it.

// accountId = 1222;
// Not valid because it's an constant and cannot be changed

let accountState;

accountEmail = "hetsh1222@gmail.com";

accountPassword = "123456";

accountCity = "Ahmedabad";

console.log("Account Details:");
console.table({ accountId, accountEmail, accountPassword, accountCity, accountState });

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/
