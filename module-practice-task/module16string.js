console.log('Task 1');
//Count how many times a string has the letter a
let fullName = "Tafjal Hossain Shakil";
let count = fullName.toLowerCase().split('a').length - 1;
console.log(count);

console.log('Task 2');
//Count how many times a string has the letter a or A
let str = "Amar Sonar Bangla, Ami Tomay Valobasi";
let count_a = 0;
let count_A = 0;
for(let i = 0; i < str.length; i++){
    if(str[i] === "a"){
        count_a++;
    }
    if(str[i] === "A"){
        count_A++;
    }
}
console.log(`a is ${count_a} times & A is ${count_A} times`);

console.log('Task 3');
//Check whether a string contains all the vowels a, e, i, o, u
let str2 = "A quick brown fox jumps over the lazy dog";
let lowerStr2 = str2.toLowerCase();
if( lowerStr2.includes('a') && 
    lowerStr2.includes('e') && 
    lowerStr2.includes('i') && 
    lowerStr2.includes('o') && 
    lowerStr2.includes('u')){
    console.log('This String contains all vowels a, e, i, o, u');
}

console.log('Task 4');
//If a given string has either x, replace x by y. if the given string has X, replace it by Y.
//Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
let str3 = "Xander said xoxo while fixing his broken Xbox";
let replaceY = str3.replaceAll('X', 'Y');
let replace_y = replaceY.replaceAll('x', 'y');
console.log(replaceY);
console.log(replace_y);

console.log("Task 5");
//Capitalize Every first Letter of each word in a String
const str3Arr = str3.split(" ");
let capitalize = "";
for(let i = 0; i < str3Arr.length; i++){
    capitalize += str3Arr[i][0].toUpperCase() + str3Arr[i].slice(1) + " ";
}
console.log(capitalize.trim())