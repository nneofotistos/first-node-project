const numbers = [1,2,4,5,22,34];
const person = {
    name: "John Doe",
    age: 39,
    foods: ['burgers', 'fries'],
    car: {
        name: "Tesla",
        model: "Model S",
        year: 2020
    }
}

console.log(numbers);
console.log(person.foods);

const myModule = require('./utils/myModule');

console.log(myModule);

console.log(myModule.helloClass());