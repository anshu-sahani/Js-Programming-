// dataTypes 
// two type of dataTypes 
// 1 >= Primitive DataTypes
//7 types of primitive dataTypes
let name = 'ANshu' // String
let num = 10  // Number
let inLogged = false // Boolean
let nullvalue = null // null
console.log('null data types :',typeof nullvalue); // output >= object (this is unique);
let someNumber;  // undefined
console.log(typeof someNumber) ; // outPut >= undefined
 // symbol
 let id = Symbol('123');
 let anotherId = Symbol('123');
console.log(typeof id); // output >= symbol
 console.log(id ===  anotherId);  //  output >= false(id and anotherId are not same );

 // BigInt 
let bigNumber = 124678647823756n;
console.log(typeof bigNumber);  // output >= bigint


// 2 >= reference or Non Primitive DataTypes

// Array function object
// Array
let BatsMan = ['Rohit', 'Dhoni', 'Virat', "gill", "maxvell", 'Pollad'];

console.log('typeof BatsMan :', typeof BatsMan);

// object 
let anshu = {
    name: 'Anshu',
    age : 22,
    player : 'cricket',
    team : 'Utter Pradesh',
}

console.log('typeOf Anshu :', typeof anshu);

// function
function myFunction() {
    console.log('hello Worlds')
};
myFunction();
console.log(typeof myFunction);


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// memory data types 
// 1 >= stack(primitive)
let username = 'Anshu sahni';
let anotherUserName = username;
anotherUserName = 'Avisha';
console.log(anotherUserName);
console.log(username);


// 2 >= heap(non-primitive)

let userOne = {
    name: "Anshu",
    email: "anshusahni90@gmail.com",
    age: 20
};
let userTwo = userOne;
userTwo.email = 'anshusaniueuyeyb562@hamnsd.com';
// userTwo = {
//     name: 'avisha',
//     email: 'avisha@jfhhdss.com',
// }
console.log(userOne);
console.log(userTwo);