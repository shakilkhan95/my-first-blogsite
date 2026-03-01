// const numbers = [123, 45341, 343, 562, 4, 34, 235, 56, 5466, 67];
// const even = numbers.filter(num => num % 2 === 0);
// let totalOfEven = 0;
// for(const item of even){
//     totalOfEven += item;
// }
// const averageOfEven = totalOfEven / even.length;
// const evenNumbers = {
//     evenNumbers: even,
//     total: totalOfEven,
//     average: averageOfEven,
// }
// function getEven(arr){
//     const even = arr.filter(num => num % 2 === 0);
//     let totalOfEven = 0;
//     for(const item of even){
//         totalOfEven += item;
//     }
//     const averageOfEven = totalOfEven / even.length;

//     return {evenNumbers: even, total: totalOfEven, average: averageOfEven};
// }

// console.log(getEven(numbers).evenNumbers[0]);
// function findEven(arr){
//     const evenNumbers = [];
//     let total = 0;
//     for(const item of arr){
//         if(item % 2 === 0){
//             evenNumbers.push(item);
//             total += item;
//         }
//     }
//     const average = total / evenNumbers.length;
//     return {
//         evenNumbers: evenNumbers,
//         total: total,
//         average: average
//     };
// }
// const evenNumbers = findEven(numbers);
// console.log(evenNumbers)

// const even = (arr) => {
//     const evenNumbers = [];
//     for(const i of arr){
//         if(i % 2 === 0){
//             evenNumbers.push(i);
//         }
//     }
//     return evenNumbers;
// }
// console.log(even(numbers))
// const even = (arr) => arr.filter(i => i % 2 === 0);
// console.log(even(numbers))
// let data = -1;

// if(data){
//     console.log('true');
// }else{
//     console.log('false')
// }

// let a = 1;
// let b = !!a;
// console.log(b)
// const string = "Ohhh this is a fun one JavaScript has many creative ways to give you undefined. Lets break it down clearly.";
// const splittedString = string.split(" ");
// const capitalizeArray = [];
// let words = '';
// for(const word of splittedString){
//     words = word[0].toUpperCase() + word.slice(1);
//     capitalizeArray.push(words);
// }
// const capitalizeString = capitalizeArray.join(' ');
// console.log(capitalizeString)




// const numbers = [123, 45341, 343, 562, 4, 34, 235, 56, 5466, 67];
// const newNumbers = numbers.map(num => num * 2);
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// const totalOfEven = evenNumbers.reduce((total, num) => total + num, 0);
// const averageOfEven = totalOfEven / evenNumbers.length;
// console.log(evenNumbers);
// evenNumbers.forEach(num => {
//     console.log(num )
// });
// const leftDiv = document.getElementById('left');

// const liElements = document.querySelectorAll('li');
// liElements.forEach(li => {
//     li.addEventListener('click', toggleColors);
// });

// function toggleColors(){
//     leftDiv.classList.toggle('hidden');
// }

const marks = {
    bangla: 74,
    english: 64,
    accounting: 90,
    math: 73,
}

// function analyzeMarks(obj){
//     let totalMarks = 0;
//     let highestMarks = -Infinity;
//     let lowestMarks = Infinity;
//     for(const key in obj){
//         totalMarks += obj[key];

//         if(obj[key] > highestMarks){
//             highestMarks = obj[key];
//         }
//         if(obj[key] < lowestMarks){
//             lowestMarks = obj[key];
//         }
//     }
//     const averageMarks = totalMarks / Object.keys(obj).length;
//     return {totalMarks, 
//             highestMarks, 
//             lowestMarks, 
//             averageMarks
//         };
// }

// function analyzeMarks(obj){
//     const marks = Object.values(obj)
//     const totalMarks = marks.reduce((total, mark) => total + mark, 0);
//     const highestMarks = Math.max(...marks);
//     const lowestMarks = Math.min(...marks);
//     const averageMarks = totalMarks / marks.length;
//     return {
//         totalMarks,
//         highestMarks,
//         lowestMarks,
//         averageMarks
//     }
// }

// const analyzedMarks = analyzeMarks(marks);
// console.log(analyzedMarks)

