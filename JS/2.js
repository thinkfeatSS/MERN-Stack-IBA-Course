// var id = 1; // global variable
// {
//     let name = "Adnan"; // local variable
//     console.log(name);
// }

// operators

// 1 Airthemtic Operators

// +
// 1 addtion in case of numbers
// 2 contation in case String

// - in case numbers
// * multiplication
// / divide 
// % modulus

// Compasion Operators   Ture, Flase
let valueOne = 5;
let valueTwo = 5;
let valueThree = 15;

// valueOne > valueTwo
console.log(valueOne > valueTwo)
// 10 > 5 --> Ture

valueOne < valueTwo





// Primitive Datatypes
// 1 number values 1,2,3   ---  1.5,1.6
// console.log(Number.MAX_VALUE)
// 2 String "Name" , "512"
// 3 bollen True, False
// 4 null
// 5 undefined
// 6 bigInt
// let largeNumber = 999999999999999999999999999999999999999n
// let largeNumberTwo = BigInt(9999999999999999999999999)
// console.log(largeNumber)
// console.log(largeNumber)

// String
// String is ordered / index collection of charecters

// "A d n a n - A i j a z"
//  0 1 2 3 4 5 6 7 8 9 10
// firstName = "   Adnan Aijaz    "
// console.log(firstName[0]);
// console.log(firstName[5]);
// console.log(firstName[firstName.length-1])

// console.log(firstName.length)
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.trim())

// Type casting
let numStr = "110"
let num = 512
console.log(typeof numStr)
console.log(typeof num)

// Type casting to string
let numInStr = String(num)
let numInStrTwo = num+''
console.log(numInStr, typeof numInStr)
console.log(numInStr, typeof numInStrTwo)

// type casting to intiger
let numInInt = Number(numStr)
let numInIntTwo = +numStr
console.log(numInInt, typeof numInInt)
console.log(numInIntTwo, typeof numInIntTwo)