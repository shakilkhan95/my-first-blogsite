console.log('Task 1');
//Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const revColors = [];
for(const color of colors){
    revColors.unshift(color);
}
console.log(revColors);

console.log('Task 2');
//Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];
for(const num of numbers){
    if(num % 2 === 0){
        evenNumbers.push(num);
    }
}
console.log(evenNumbers);

console.log('Task 3');
//Use a for...of loop to concatenate all the elements of an array into a single string.
const strArray = ['Tom', 'Tim', 'Tin', 'Tik'];
let singleStr = '';
for(const str of strArray){
    singleStr = singleStr + str;
}
console.log(singleStr);

console.log('Task 4');
//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person'
let revStatement = '';
for(const state of statement.split(' ')){
    revStatement = state + ' ' + revStatement;
}
console.log(revStatement.trim());

console.log("Task 5");
//Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
const original = [1, 2, 3];
const copy = [...original];
copy[0] = 99;
console.log(copy);
console.log(original);

console.log('Task 6');
//Given an array of student objects, print each student’s name and marks.
const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];
for(const student of students){
    console.log(`${student.name} scored ${student.marks}`);
}

console.log('Task 7');
//Given a 2D array, update the value at second row first item to 99 and print the updated array.
const arr2D = [
  [1, 2],
  [3, 4],
  [5, 6]
];
arr2D[1][0] = 99;
console.log(arr2D);