// let fruits = [];
// fruits.push('Apple');    // adds 'Apple' to the end of the array
// fruits.push('Banana');
// fruits.push('Orange');
// fruits.push('Mango');
// fruits.push('Grapes');
// fruits.push('Pineapple');
// fruits.push('Strawberry');
// fruits.push('Watermelon');
// console.log(fruits);

// fruits.unshift('Kiwi'); // adds 'Kiwi' to the beginning of the array
// console.log(fruits);

// fruits.pop();      // removes the last element
// console.log(fruits);

// fruits.shift();    // removes the first element
// console.log(fruits);


let cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes', 'Audi'];
console.log(cars.length);

// cars.forEach((car) => {               // Very Important
//     console.log(car);
// });


// cars.map((car, index) => {            // Very Important
//     console.log(car + ' ' + index);
// });


// cars.map((car, index) => {
//     console.log(car + ' ' + index);
//     if(car === 'BMW')
//     {
//         cars[index] = 'Bugatti';
//     }
// });
// console.log(cars);


// cars = cars.filter((car, index) => {       // Very Important
//     return car != 'Ford';
// });
// console.log(cars);


// console.log(cars.indexOf('Chevrolet'));     // Checks the index of 'Chevrolet' in the array


// let name = 'Shashwath Karkera';
// let nameArray = name.split(' ');   
// console.log(nameArray);                      // Splits the string into an array based on spaces


// let name = ['Shashwath','Karkera'];         // Joins String into single String
// let newName = name.join("@")
// console.log(newName)


// let student = {                          // JSON FORMAT - JAVASCRIPT OBJECT NOTATION
//     "name":"Shashwath Karkera",
//     "age" : 20,
//     "skills" : ["HTML","CSS"]
// }