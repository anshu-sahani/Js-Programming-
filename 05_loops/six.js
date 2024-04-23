const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum.forEach( (num) => {
        console.log(num);
        return num;
});
console.log(newNum);

//filter

const newFilter = myNum.filter((num) => {
        if(num === 4 ) {
                return console.log('4 is my Best Number');
        }
        return num > 5;
});

console.log(newFilter);

const newMap = myNum.map((num) => {
        return num+ 2;
});

console.log(newMap);