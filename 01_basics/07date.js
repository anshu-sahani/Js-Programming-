// let date = new Date(2024, 0, 12);
// console.log(date.getDate());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toJSON());


console.log('hELLO WORLDS !!')


let createdDate = new Date("2024-03-23");

console.log(createdDate.toLocaleString());
console.log(createdDate);

let date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getTime());// time in milli Seconds 
console.log(date.getTime()/1000) // time in seconds
console.log(Math.round(date.getTime()/1000));

let newDate = new Date('2024-01-22');
let myDate = new Date(2024, 0, 12);

console.log(newDate);
console.log(myDate);