// singleton
// Object.create

// object literals

const mySyl = Symbol('key1');

const JSuser = {
    name: 'Anshu',
    "full_name": 'Anshu sahani',
    age: 20,
    email: 'anshusahani9000@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', "Sunday", 'Satrday'],
    location: 'Madhuban',
    // symbol 
    [mySyl] : 'mySymbolKey!',
};
// access object with (.) notetion
//   console.log(JSuser.name);
//   console.log(JSuser.email);

  // [] access the object values
  console.log(JSuser['name']);
console.log(JSuser["full_name"]);

console.log(JSuser[mySyl]);
console.log(typeof JSuser[mySyl]);


JSuser.getGreeting = function(){
    console.log('Helle JS users !');
}

console.log(JSuser.getGreeting());
console.log(JSuser);

JSuser.name = 'Avinash Sahani';
//Object.freeze(JSuser); // Object value is freezed 
console.log(JSuser);

JSuser.getJSuserGreet = function(){
    console.log(`Hello JS users ! My name is ${this.name} and age is ${this.age} `);
}
console.log(JSuser.getJSuserGreet());