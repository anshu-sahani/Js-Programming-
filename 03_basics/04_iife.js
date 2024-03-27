// Immediately Invoked Function Expressions (IIFE)

// use named function
( function OneFun() {
    console.log('DB connected !');
}) ();

// use Arrow function
( () => {
    console.log('DB connnected Two !');
}) ();

( (name, age, method) => {
    console.log(`my name is ${name}, and ${age} years old, Mthod ${method}`);
}) ('Anshu', 32, "POST");