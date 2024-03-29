'use strict';

// Callback function

function first () {
    // do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, Callback) {
    console.log(`я учу ${lang}`);
    Callback();
}

learnJS('JavaScript', function() {
    console.log(`Я прошел этот урок!`);
});

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
            border: 'black',
            bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest ();

const {border, bg} = options.colors;

console.log(border);




console.log(Object.keys(options).length);

// console.log(options.name);
// delete options.name;

// console.log(options);
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for ( let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        counter++;
    }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
    }
}

console.log(counter);

