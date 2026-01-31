console.log('Task 1');
//Take four parameters. Multiply the four numbers and then return the result
function multiplier(a, b, c, d){
    return a * b * c * d;
}
const resultMultiplier = multiplier(4, 6, 2, 9);
console.log(resultMultiplier);

console.log('Task 2');
//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function oddEven(number){
    if(number % 2 !== 0){
        return number * 2;
    } else {
        return number / 2;
    }
}
const resultOdd = oddEven(5);
console.log(resultOdd);
const resultEven = oddEven(8);
console.log(resultEven);

console.log('Task 3');
//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values
function make_avg(array){
    let sum = 0;
    for(const arr of array){
        sum += arr;
    }
    return sum / array.length;
}
const array = [44, 36, 632, 65, 23, 86, 92];
const averageOfArray = make_avg(array).toFixed(2);
console.log(averageOfArray);

console.log('Task 4');
//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string
function count_zero(string){
    let count = 0;
    for(const ch of string){
        if(ch === '0'){
            count ++;
        }
    }
    return count;
}
const binary = '01000100010100110011';
const resultCount_zero = count_zero(binary);
console.log(resultCount_zero);

console.log('Task 5');
//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(integer){
    if(integer % 2 === 0){
        return 'Even';
    } else{
        return 'Odd';
    }
}
console.log(odd_even(76));
console.log(odd_even(67));