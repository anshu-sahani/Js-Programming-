// for loops
for (let index = 1; index < 11; index++) {
    const element = index;
    //console.log(element);
    
}
// array properties
myArray = ['ram', 'shaym', 'mohan', 'raju', 'yogesh', 'devendra'];
for (let i = 0; i < myArray.length; i++) {
    const element = `${i + 1} no   :` + myArray[i].toUpperCase();
    //console.log(element);
}

for (let i = 1; i < 11; i++) {
   // console.log('header No : ' + i);
    for (let index = 1; index < 11; index++) {
        const element = `inner Numbers : ${index}, and Outer number ${i}`;
       /// console.log(element);
    }
    
}

//break and continue

for (let index = 0; index < 15; index++) {
   
    if(index == 10) {
        console.log(`10 is the proper number ${index}`);
        break;
    }
    console.log(index);
}
for (let i = 0; i < 15; i++) {
    if(i == 10) {
        console.log(`${i} is the Proper num `);
        continue;
    }
    console.log(i);
    
}
for (let i= 1; i <= 10; i++){
    console.log(` Table Of  ${i}`);
   for (let index = 1; index <= 10; index++) {
        console.log(`${i} * ${index} = ${i * index}`);
   }
  
}