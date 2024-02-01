'use strict'

// const hamburger = true;
// const fries = false;

if(hamburger && fries) {
    console.log("Я сыт");
} else {
    console.log("Я голоден");
}

console.log((hamburger && fries)); 


const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola && fries);


console.log(1 && 0);
console.log(1 && 5);
console.log(null && 0);
console.log(0 && 'skfjsrhfjkshvkjdfvkjfdglknf');

if (hamburger === 3 && cola && fries) {
    console.log('Все сыты');
} else {
    console.log('Нужно больше еды');
}




const pizza = 0;
const sushi = 2;
const pepsi = 1;
const chiken = 2

if (pizza === 2 || sushi === 3 || pepsi === 1 && chiken === 2) {
    console.log('ok');
} else {
    console.log('Go away');
}

let jonhReport, alexReport, samReport, mariaReport = 'done';

console.log(jonhReport || alexReport || samReport || mariaReport);


console.log(!0);

// Циклы

let num =50;
while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);


for (i = 1; i < 8; i++) {
    console.log(i);
}


for (let i = 1; i < 3; i++) {
    console.log(i);
    for (let j = 1; j < 3; j++) {
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}
console.log(result);

// Метка

 first: for (let i = 0; i < 5; i++) { 
    console.log(`First level: ${i}`);
        
    for (let j = 0; j < 5; j++) { 
        console.log(`Second level: ${j}`);
        
        for (let k = 0; k < 5; k++) { 
            console.log(`Third level: ${k}`);
            if (k === 2) continue first;
            }
        }
 }
