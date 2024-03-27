/// if condition

// <, >, <=, >=, ==, !=, ===, !==

// const num = 10;
// if(num > 100) {
//     let name = 'anshu';
//     console.log('Hello This is the greatest no of 100');
// } else {
//     console.log('Number is less than 100');
// }
// console.log('This statment is always show the function');


// switch statment

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 10
// switch (month) {
//     case 1 :
//         console.log('January');
//         break;
//     case 2 :
//         console.log('February');
//         break;
//     case 3 :
//         console.log('March');
//         break;
//     case 4 :
//         console.log('Aprail');
//         break;
//     case 5 :
//         console.log('may');
//         break;
//     case 6 :
//         console.log('June');
//         break;
//     case 7 :
//         console.log("Jully");
//         break;
//     case 8 :
//         console.log('August');
//         break;
//     case 9 :
//         console.log('Septmber');
//         break;
//     case 10 : 
//     console.log('October');
//     break;
//     default :
//     console.log('Default Invailid Values Plz enter a Vailid Values !');
//     break;                
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
const username = 'b  ';

// if and satament  all values are correct then function run true 
if(userLoggedIn && debitCard && username.length > 3) {
    console.log('you can countinue your shoping Hera !');
} else {
    console.log('you can not countinue your shoping plz cheack your details again !');
}

// if OR statment >>>> Only one value is correct then fun is true
if(loggedInFromEmail || loggedInFromGoogle) {
    console.log('Got email Successfully !!');
} else {
    console.log('Email is not Found PLZ try again !!');
}