// const arrowfun = () => {
//     const username = 'anshu';
//     console.log(this.username);
// }
// arrowfun();

// const myFunction = (num1, num2, num3) => {
//     return num1 + num2 + num3 ;
// }

//const myFunction = (num1, num2, num3) => num1 + num2+ num3;

const myFunction = (num1, num2, num3) => (num1 + num2 + num3);
let number = myFunction(10 , 20, 25);

console.log(number);