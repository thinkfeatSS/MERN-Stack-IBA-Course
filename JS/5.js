// let i = 2; 


// i % 2 === 0 //check for remider is equal to 0

// do {
//     if(i % 2 === 0){
//         console.log(i);
//     }
//     i++; // Increment in i by one
// }while(i < 10)

// do {
//     console.log(i);
//     i = i + 2;
// }while(i<10)


// "Adnan" nanda 

// let nam = "talha";
// let reversedName = '';

// let i = nam.length - 1; // 4
// while(i >= 0) {
    //     reversedName += nam[i];
    //     i--;  
    // }
    // nam[i] --> nam[4] --> n
    // nam[i] --> nam[3] --> a
    // nam[i] --> nam[2] --> n
    // nam[i] --> nam[1] --> d
    // nam[i] --> nam[0] --> A
    // '' --> n
    // '' --> na
    // '' --> nan
    // '' --> nand
    // '' --> nandA
    // i = 4  , i = 3 , i =2 , i =1 , i = 0, i = -1 flase


// console.log(reversedName);
// 1 intialization
// 2 condtion
// 3 icrement or decrement
// print whole numbers
// for( let i = 0; i<10; i++){
    //     console.log(i)
    // }

//     // print whole numbers
// for( let i = 0; i<10; i++){
//     console.log(i)
// }

// // Even Print
// for( let i = 0; i<10; i=i+2){
//     console.log(i)
// }
// // Odd Print
// for( let i = 1; i<10; i=i+2){
//     console.log(i)
// }


// -----------------------Functions --------------------

// Predefined Functions
console.log("JavaScript is cool");

// function define
function PrintTenLines(){
    for( let i = 0; i < 10; i++){
        console.log(i);
    }
}
// Function call
// PrintTenLines();
// console.log("Just testing");
// console.log("Tim is precious");
// PrintTenLines()

function printLines(n){
    for(let i=0;i<n;i++){
        console.log(i)
    }
}