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


const faker = require('faker');

let randomName = faker.name.findName();
console.log(randomName);

const randomAddress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode()
}
console.log(randomAddress);

const axios = require('axios');

axios.get('https://api.github.com/users/nneofotistos')
.then(function(response) {
    console.log(response.data);
})
.catch(function(err) {
    console.log(err);
});
