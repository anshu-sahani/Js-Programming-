//  forEach 
const User = ['anshu', 2, 3, 67, 78, 'Ram'];

User.forEach( function(val, index, arr) {
    //console.log(val, index, arr);
});

const courses = ['Computer Science', 'IT' , 'Civil-service', 'Mechenical', 'Electrician'];
courses.forEach( (sub) => {
    //console.log(sub);
});

const user = [
    {
        username: 'anshu',
        age: 20,
        email: 'anshusahnai900@gmail.com'
    },
    {
        username: 'Raju',
        age: 19,
        email: 'rajushani90@mail.com'
    },
    {
        username: 'Poonam',
        age:22,
        email: 'poonam123!@gmail.com'
    }
];
user.forEach((userData) => {
    console.log(userData.username + `and Age Is ${userData.age}`);
})