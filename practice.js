const numbers = [123, 45341, 343, 562, 4, 34, 235, 56, 5466, 67] ;
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
const even = (arr) => arr.filter(i => i % 2 === 0);
console.log(even(numbers))