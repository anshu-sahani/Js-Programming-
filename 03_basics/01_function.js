function myFunction(num1, num2) {
    let result = num1 + num2;
    //console.log(result);
    return result;
}

const myValue = myFunction(10, 34);
//console.log(myValue);

function UserLogin(username) {
    if(!username) {
        console.log( 'Hello User Plz enter your username Details !');
        return 
    }
    let result = `${username} Just Logged In This WebPages !`;
    return  result;
}

let Rahul = UserLogin('Rahul');
console.log(Rahul);

// rest parameters
function Restparams(...num1){
    return num1;
}
let shoppingCart = Restparams(100, 200, 2000, 190090);
//console.log(shoppingCart);
function restparamsValues(value1, value2, ...num1) {
      //console.log(value1 + value2);  
        let values = value1 + value2 ;
        if(values > 500) {
            return values;
        }
        return num1;
   
}
let CartPrice = restparamsValues(100, 500, 299, 2999, 20283);

//console.log(CartPrice);

// function using Objects
function myObjects(anyObj) {
      let result = `UserName is ${anyObj.userName} and email is ${anyObj.email}, and ageIs ${anyObj.age}`;
      return result;
}
let user = {
    userName: 'Anshu',
    email: 'anshusahnai89@gmail.com',
    age: 20,
    isLoggedIn: false
}

console.log(myObjects(user));
let objects = myObjects({userName: 'Avinash', email: 'abshusahna90@hgmail.com', age: 22});
console.log(objects);

// Array using in Function
const UserArray = [100, 2000, 3900, 500, 495856, 48958589];
function arrayFunction(anyArray) {
    return anyArray[1];
}

console.log(arrayFunction(UserArray));