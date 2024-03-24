const newUsers = {};
newUsers.name = 'Anshu Shani';
newUsers.email = "anshusahnai89@gmail.com";
newUsers.isLoggedIn = false;

console.log(newUsers);
const obj1 = {1: 'Avi', 2: "ansu", 3: 'ram'};
const obj2 = {4: 'Sahani', 5: 'we', 6: 'rtyy'};

//const obj3 = {obj1, obj2}; /// outPut >= obj1: { '1': 'Avi', '2': 'ansu', '3': 'ram' }, obj2: { '4': 'Sahani', '5': 'we', '6': 'rtyy' }}
const obj3 = Object.assign({}, obj1, obj2); // assign use
// sprade oprators
const obj4 = {...obj1, ...obj2, ...obj3};
//console.log(obj3);
console.log(obj4);