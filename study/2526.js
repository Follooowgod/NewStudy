'use strict';

let num = 20;

function showFirstMessage (text) {
    console.log(text);
    let num = 10;
    console.log(num);
}
showFirstMessage('Hello World!');
console.log(num);


// function calc(a,  b){
//     return(a + b);
// }

// console.log(calc (4, 3));
// console.log(calc (5, 6));
// console.log(calc (1354, 5656));




function ret() {
    let num = 50;

    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log('Hello');
};

logger();


const calc = (a, b) => {return a + b};

const usdCurr = 28;
const eurCurr = 32;

function convert (amount) {
    console.log(curr * amount);
}

convert (500, usdCurr);