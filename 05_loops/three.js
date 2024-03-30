// for of loops 
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (const num of arr) {
   // console.log(num);
}

const username = 'Anshu Worlds !';
for (const letter of username) {
    if(letter === ' ') {
      //  console.log('-');
        continue;
    }
   // console.log(letter);
}

//Maps
const map = new Map()
map.set('IN', "India");
map.set('USA', "United State Of America");
map.set('Fr', "France");
map.set('UK', "United Kindom");

// console.log(map);
for (const [key, value] of map) {
    console.log(`${key} Shortcut of ${value}`);
    
}

//for of loop using in objects
const myObj = {
    username : 'Anshu',
    age: 10,
    email: 'anshusahnai900@gmail.com',
    pass: 'ansi'
}
// for (const user of myObj) {
//     console.log(user);

// for of loop is working on the objects
// }