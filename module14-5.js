//task 1
// Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
const fruits = ['Mango', 'Banana', 'Orange', 'Apple', 'Grape'];
console.log(fruits[3]);
fruits[2] = 'Jambura';
console.log(fruits);

//task 2
//Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output
const touristDestinations = ['Ain Anthum', 'Darbat', 'Moghsail'];
touristDestinations.push('Haafa');
console.log(touristDestinations);
touristDestinations.unshift('Taqa', 'Thumrait');
touristDestinations.pop();
console.log(touristDestinations);

// 3. Checking Array Membership with ‘includes’
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.
const myFavoriteBooks = ['Tin Goyenda', 'Masud Rana', 'Ogni Purush', 'Amazonia'];
console.log(myFavoriteBooks.includes('Amazonia'));
console.log('My most favorite books index is:' + ' ' + myFavoriteBooks.indexOf('Ogni Purush'));

// 4. Checking if it's an Array
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.
const string = 'ABC';
console.log(Array.isArray(string));
const number = 185;
console.log(Array.isArray(number));
const boolean = true;
console.log(Array.isArray(boolean));
const array = [1, 2, 4, 5, 6, 9];
console.log(Array.isArray(array));

// 5. Combining Arrays
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().
const boysName = ['Rohim', 'Korim', 'Josim'];
console.log(boysName);
const girlsName = ['Karina', 'Sokina', 'Jorina'];
console.log(girlsName);
const childrensName = boysName.concat(girlsName);
console.log(childrensName);