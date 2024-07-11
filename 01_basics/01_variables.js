const accountId = 1243;
let accountEmail = "bigyansapkota123@gmail.com";
var accountPassword = "12345pw";
accountCity = "Chitwan";
let accountState;

accountEmail = "bigyan@love.com";
accountPassword = "23940pw";
accountCity = "Bharatpur";

/* 
NOTE: Prefer not to use var.
Because of issue in block and functional scope.
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
