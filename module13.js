//first task
let orangePrice = 150;
let applePrice = 250;
let total = orangePrice + applePrice;
let money = 1000;
console.log(money - total);

//second task
//Mathematics, Biology, Chemistry, Physics, and Bangla
//75.25, 65, 80, 35.45, 99.50
let matheMatics = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;
let totalMarks = matheMatics + biology + chemistry + physics + bangla;
let average = totalMarks / 5;
console.log(average.toFixed(2));

//task 3
//You task is to divide the given number by 5 and show the remainder as the output.
let number3 = 119;
let remainder = 119 % 5;
console.log(remainder);

//task 4
let e = isNaN('11');
//the result will be false. Because isNan method check is it a number? In this case JS will convert the string number into valid number type data then it will check is it Not a number. Because it will be converted to a number the answer will be false.
let d = isNaN(2-10);
//The result will be false. Because it's a valid negative number.