console.log('task2')
//Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
let a = 1;
let sum = 0;
while(a <= 200){
    console.log(a);
    sum = sum + a;
    if(sum >= 100){
        break;
    }
    a++
}
console.log(sum)
