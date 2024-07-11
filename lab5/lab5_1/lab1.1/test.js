// //A1
// var x = 10;
// if (x === 10) {
//   var y = 100;
//   console.log(y); //100
// }
// console.log(y); //100

// // A2
// var x = 10;
// if (x === 10) {
//   var y = 100;
//   console.log(y); //100
// }
// console.log(y); //100

// //A3
// var x = 10;

// let y = 100;
// if(x === 10){
//     console.log(y);//100
// }
// console.log(y);//100

// //B1
// let myArray1 = [1, 2, 3]
// myArray1.forEach(element => {
// console.log(element); //1 2 3
// });

// //B2
// let myArray2 = [1, 2, 3];
// for (const iterator of myArray2) {
// console.log(iterator); // 1 2 3
// }

// //B3
// let dog = {
//     name: "Yoyo", color: "black", age: 2
//     }
//     for (const k in dog) {
//     console.log(k); //name color age
//     }

// //C1
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, numbersOne];
// console.log(numbersTwo)
// //[4, 5, Array(3)]

// //C2
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, ...numbersOne];
// console.log(numbersTwo)
// //[4, 5, 1, 2, 3]

// //4
// function fun(...input) {
//     let sum = 0;
//     for (let i of input) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(fun(1,2,3,4));