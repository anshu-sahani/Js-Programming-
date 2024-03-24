
function funOne() {
    const username = 'Anshu';

    function funTwo() {
        console.log(username);
        const websites = 'https: // www.youtubeChannel.js';
        
        function funThree() {
            console.log('Function Three userName: ', username);
            console.log('function three', websites);
            const facebook = 'http://facebook.com';
        }
        funThree();
        //console.log(facebook); // can not access becouse const facebook is block level element so this can not be acces out of the blocks;


    }
    funTwo();
}
//funOne();

myNewFun(10); //it can call any possitions
function myNewFun(num) {
    return num + 10;
}
addTwoNum(20); //it can not call  after the function written
const addTwoNum = function(num) {
    return num + 2;
}
