/* types of variables */
const accountId = 2542373;
let accountUser = 'Anshu';
var accountPassword = '12332';
accountCity = "Delhi";

console.log(accountId);
console.table([accountId,  accountUser, accountPassword, accountCity]);

/* changing in variables values 
but const variable is not change */
accountUser = 'Ramusahai';
accountPassword = '1212122';
accountCity = 'mumbai';
let accountState ;

console.table([accountId, accountUser, accountPassword, accountCity, accountState]);