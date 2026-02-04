console.log('Task 1');
//Write a function to convert temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(24));

console.log('Task 2');
//You are given an array of numbers. Count how many times the a number is repeated in the array.
function findingRepeat(numbers, findNumber){
    let count = 0;
    for(const num of numbers){
        if(num === findNumber){
            count ++;
        }
    }
    return count;
}
const numbers = [5,6,11,12,98, 5]
//find: 5
const count5 = findingRepeat(numbers, 5);
console.log('The number 5 is repeated in this array', count5, 'times');

const numbers2 = [5,6,11,12,98, 5]
//find: 25
const count25 = findingRepeat(numbers2, 25);
console.log('The number 25 is repeated in this array', count25, 'times');

console.log('Task 3');
//Write a function to count the number of vowels (a, e, i, o, u) in a string.
const str = "A quick brown fox jumps over the lazy dog";
function findingVowels(string){
    const lowerCase = string.toLowerCase();
    let count = 0;
    for(const char of lowerCase){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count ++;
        }
    }
    return count;
}
const numberOfVowels = findingVowels(str);
console.log(numberOfVowels);

console.log('Task 4');
//Write a function to find the longest word in a given string.
const str2 = "I am learning Programming to become a programmer";
function longestWord(string){
    const words = string.split(" ");
    let longest = "";
    for(const word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
const longestOfStr2 = longestWord(str2);
console.log(longestOfStr2);

console.log('Task 5');
//Generate a random number between 10 to 20.
function randomNumber(min, max){
    const random = Math.round(Math.random() * (max - min) + min);
    return random;
}
const generatedNumber = randomNumber(10, 20);
console.log(generatedNumber)
const generatedNumber2 = Math.round(Math.random() * 10 + 10);
console.log(generatedNumber2)