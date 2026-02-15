//Task 1
let burgerPrice = 600;
if(burgerPrice > 500){
    console.log("Your bill is" + " " + burgerPrice + " " + "And you have got a free coke");
} else{
    console.log("Your bill is" + " " + burgerPrice);
}

//task 2
//BMI Calculator and Health Category
let weight = 63;
let height = 157;
let heightInMeter = height / 100;
let BMI = weight / (heightInMeter ** 2);
BMI = BMI.toFixed(2);
if(BMI < 18.5){
    console.log("You are underweight");
}else if(BMI >= 18.5){
    console.log("Your weight is normal");
}else if(BMI >= 25 && BMI <= 29.9) {
    console.log("You are overweight");
}else{
    console.log("You are obese");
}

//task 3
//Grade calculator
let score = 40;
if(score >= 90) {
    console.log("Your grade is: A");
} else if(score >= 80 && score <= 89){
    console.log("Your grade is: B")
} else if(score >= 70 && score <= 79){
    console.log("Your grade is: C");
} else if(score >= 60 && score <= 69){
    console.log("Your grade is: D")
} else{
    console.log("Your grade is: F");
}

//task 4
//using nested if-else-if-else
let myScore = 40;
let friendsScore = 40;
if(myScore > 80){
    if(friendsScore > 80){
        console.log("Let's go for launch");
    } else if(friendsScore >= 60){
        console.log("Good luck for next time");
    } else if(friendsScore >= 40){
        console.log("unseen");
    }
} else{
    console.log("Let's go to home and sleep");
}

//task 5
//ternary operator
let num1 = 20;
let num2 = 30;
let result = 0;
if(num1 > num2){
    console.log(result = num1 * 2);
} else {
    console.log(result = num1 + num2);
}
//in ternary
console.log(result = num1 > num2 ? num1 * 2 : num1 + num2);


//task 6
//ticket fare calculator
let ticketPrice = 800;
let age = 20;
let isStudent = true;
if(age < 10){
    console.log("Ticket is free");
} else if(age > 10 && age < 60){
    if(isStudent){
        console.log(ticketPrice / 2);
    } else {
        console.log(ticketPrice);
    }
} else {
    ticketPrice = ticketPrice - (ticketPrice * 15 / 100);
    console.log(ticketPrice);
}