function helloClass() {
    return 'Good morning.'
}

function goodbyeClass() {
    return 'Good bye.'
}

function addNumbers(num1,num2) {
    return num1 + num2;
}

// run this function
console.log(helloClass());

// *** how would we run this function ***
// console log it
// node index.js
// npm run start
// link inside of index

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.introduction = function () {
            return 'Hi';
        }
    }
}
// export the function
module.exports = {
    hello: helloClass,
    goodbye: goodbyeClass,
    add: addNumbers,
    human: Human,
}