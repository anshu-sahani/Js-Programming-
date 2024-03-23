const newArray = [0, 1, 2, 3, 4, 5];
const myHeroes = ['IronMan', 'CaptonAmerica', "Hulk", 'BlackPanthor', "MissMarvols", "AntMan", "spiderMan", "Dr-Strange", "Thor"];
const array2 = [2, 'Anshu', 89, 'hitesh', true, false, 45, 'hello ' ];

console.log(newArray[2]); // Print one value in the array;
console.log(newArray);
console.log(myHeroes[0]);

// Array Methods 
newArray.push(9); // add element in the arry;
newArray.push(10);
newArray.pop(); // last element is removed in the array

newArray.unshift(10); // value added in starting possition[10, 0, 1, 2, 3, 4, 5, 9];
newArray.shift();// 
newArray.shift();// value removed from starting position

console.log(newArray);
console.log(newArray.includes(10)); // giving the value of present in array or not
console.log(newArray.indexOf(3)); 
console.log(newArray.indexOf(10));// -1 is given the value is not present in the array value

const newArrayString = newArray.join();// join change the array in string
console.log(typeof newArrayString);
console.log(newArrayString)


////////slice and splice
