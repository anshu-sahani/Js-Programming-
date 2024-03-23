const marvals_heroes = ['Thor', "Ironman", 'Hulk'];
const dc_heroes = ['batman', 'flash', 'superman'];
// console.log(marvals_heroes);
// console.log(dc_heroes);

//marvals_heroes.push(dc_heroes);
//console.log(marvals_heroes);

// const all_heroes = marvals_heroes.concat(dc_heroes);
// console.log(all_heroes);

/// Or sprade oprators
const Real_heroes = ['Pardeep', 'Manaw', 'Yogesh' , 'Prakash'];
const all_heroes = [...marvals_heroes, ...dc_heroes, ...Real_heroes];

console.log(all_heroes);

const new_array = [1, 2, 4, 5, 6, [2, 4, 7], 8, [3, 30, 90, 2, [23, 90, 45, 24]], 34, 45];
//const real_new_array = new_array.flat(3);
const real_new_array = new_array.flat(Infinity);
console.log(real_new_array);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 120;
let score2 = 309;
let score3 = 509;
let score4 = 100;
let score5 = 5000;

const score_array = Array.of(score1, score2, score3, score4, score5);
console.log(score_array);
console.log(typeof score_array);
