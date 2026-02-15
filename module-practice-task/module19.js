console.log('Task 1');
//Find the lowest number in the array below.
const heights = [167, 190, 120, 165, 137];
function getLowest(numbers){
    //validating the array
    if(!Array.isArray(numbers) || numbers.length === 0){
        return "Please provide a valid array";
    }

    let lowest = numbers[0];

    for(const num of numbers){
        //another validation for array items type number or not.
        if(typeof num !== 'number'){
            return "Array items must contain valid number";
        }

        //Assigning the lowest number.
        if(num < lowest){
            lowest = num;
        }
    }
    return lowest;
}
const lowest = getLowest(heights);
console.log(lowest);

console.log('Task 2');
//Find the friend with the smallest name.
const friendsNames = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function findSmallName(names){
    let result = names[0];
    for(const name of names){
        if(name.length < result.length){
            result = name;
        }
    }
    return result;
}
const smallestName = findSmallName(friendsNames)
console.log(smallestName);

console.log('Task 3');
//Your task is to calculate the total budget required to buy electronics:
//Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
function calculateElectronicsBudget (laptopsQuantity, tabletsQuantity, mobilesQuantity){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const budget = (laptopPrice * laptopsQuantity) + (tabletPrice * tabletsQuantity) + (mobilePrice * mobilesQuantity);

    return budget;
}
console.log(calculateElectronicsBudget(1, 2, 2));

console.log('Task 4');
//You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 }
];
function findAveragePhonePrice(phones){
    let totalPrice = 0;
    for(const phone of phones){
        totalPrice += phone.price;
    }
    const averagePrice = totalPrice / phones.length;
    return Math.round(averagePrice);
}
const averagePhonePrice = findAveragePhonePrice(phones);
console.log(averagePhonePrice);

console.log('Task 5');
//For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function salaryCalculator(employees){
    let totalStartingSalary = 0;
    let totalIncrementSalary = 0;
    for(const employee of employees){
        totalStartingSalary += employee.starting;
        totalIncrementSalary += employee.experience * employee.increment;
    }
    return totalStartingSalary + totalIncrementSalary;
}
const totalSalary = salaryCalculator(employees);
console.log(totalSalary);