// Dont Repeat Yourself Principle
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// Syntex
// while (conditon){
    // Logic
// }
// ___________________________
// let i = 0;
// i = i+1;
// i++;
// console.log(i)
// ___________________________

// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// Sum of 10 natural numbers
// 1
// 2 --------> 3
// 3 --------> 6
// 4 --------> 10
// 5 --------> 15
// 6 --------> 21
// 7 --------> 28
// 8 --------> 36
// 9 --------> 45
// 10 --------> 55

let i = 1;
let total = 0;
while(i <= 10){
    total = total + i;
    i++;
}
console.log(total);

//total = n(n+1)/2

n = 10;
sum = (n*(n+1))/2
console.log(sum)