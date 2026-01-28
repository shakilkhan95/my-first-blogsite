console.log('task1')
//Write a loop 1 to 200. Use break to exit the loop once you find 100.
for(let i = 1; i <= 200; i++){
    console.log(i);
    if(i === 100){
        break;
    }
}

console.log('task2')
//Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let a = 1;
let sum = 0;
while(a <= 200){
    console.log(a);
    sum += a;
    if(sum >= 100){
        break;
    }
    a++;
}
console.log(sum);

console.log('task3')
//Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
for(let i = 1; i <= 100; i++){
    if(i * i <= 100){
        console.log(i * i);
        break;
    }
}

console.log('task4')
//Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
for(let i = 1; i <= 40; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(i);
}

console.log('task5')
//display odd number from 55 to 85 and skip the numbers divisible by 5.
for(i = 55; i <= 85; i++){
    if(i % 2 === 0 || i % 5 === 0){
        continue;
    }
    console.log(i);
}

console.log("task6")
//"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
for(let i = 1; i <= 60; i++){
    console.log(i, "I will invest at least 6 hrs every single day for next 60 days!");
}

console.log('Task 7');
//Find all the odd numbers from 61 to 100.
for(let i = 61; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

console.log('Task 8');
//Find all the even numbers from 78 to 98.
for(let i = 78; i <= 98; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

console.log('Task 9');
//Display sum of all the odd numbers from 91 to 129.
let sumOdd = 0;
for(let i = 91; i <= 129; i++){
    if(i % 2 != 0){
        sumOdd = sumOdd + i;
    }
}
console.log(sumOdd);

console.log('Task 10');
//Display sum of all the even numbers from 51 to 85.
let sumEven = 0;
for(let i = 51; i <= 85; i++){
    if(i % 2 === 0){
        sumEven = sumEven + i;
    }
}
console.log(sumEven);

console.log("Task 11");
//Generate a multiplication table for number 9
let multiplication = 9;
for(let i = 1; i <= 10; i++){
    console.log(multiplication, '*', i, '=', multiplication * i);
}

console.log('Task 12');
//Implement a countdown timer that counts down from 81 to 65.
for(let i = 81; i >= 65; i--){
    console.log(i);
}

console.log('Task 13');
//Find all the odd numbers from 61 to 100.
for(let i = 61; i <= 100; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}

console.log('Task 14');
//Find all the even numbers from 78 to 98.
for(let i = 78; i <= 98; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

console.log('Task 15');
//Display sum of all the odd numbers from 81 to 131.
let sumOdd2 = 0;
for(let i = 81; i <= 131; i++){
    if(i % 2 !== 0){
        sumOdd2 = sumOdd2 + i;
    }
}
console.log(sumOdd2);

console.log('Task 16');
//Display sum of all the even numbers from 206 to 311.
let sumEven2 = 0;
for(let i = 206; i <= 311; i++){
    if(i % 2  === 0){
        sumEven2 = sumEven2 + i;
    }
}
console.log(sumEven2);

console.log('Task 17');
//As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
let multiplication2 = 5;
for(let i = 1; i <= 10; i++){
    console.log(multiplication2, '*', i, '=', multiplication2 * i);
}

console.log('Task 18');
//Implement a countdown timer that counts down from 21 to 15.
for(let i = 21; i >= 15; i--){
    console.log(i);
}