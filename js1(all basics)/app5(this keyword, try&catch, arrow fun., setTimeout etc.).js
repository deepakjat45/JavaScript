// //this keyword
// // this keyword usi function, array or object ke bare me ya usake parent ke bare me hota he jisame wo hota he

// console.log(this); //window object

// let student = {
//   name: "deepak",
//   class: 14,
//   eng: 55,
//   math: 65,
//   scince: 90,
//   getAvg() {
//     let avg = (this.eng + this.math + this.scince) / 3;
//     console.log(avg);
//   },
// };
// student.getAvg();



// //try and catch // ji code me error aa sakata he use try and catch me dalate he

// console.log("hello");
// console.log("hello");
// console.log("hello");
// // let a = 44;
// try {
//   console.log(a);
// } catch (err) {
//   console.log(err);
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");



// //Miscellaneous topic

// //arrow function
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(2, 5));

// // more short arrow funcion
// const mul = (a, b) => a * b;
// console.log(mul(2, 9));
// const qub = n => n * n * n;
// console.log(qub(7));



// //setTimeout
// console.log("hello there!");
// setTimeout(() => {
//   console.log("deepak jat");
// }, 2000);
// console.log("my name is:");

// setTimeout(()=>{
//     console.log("ram ram")
// }, 2000);


// // set interval
// setInterval(() => {
//   console.log("hello");
// }, 1000);
// let id = setInterval(() => {
//   console.log("hello");
// }, 1000);
// console.log(id);
// clearInterval(id); // to stop set interval


// //this with arrow function
// let student = {
//   name: "deepak",
//   age: "22",
//   class: 15,
//   prop: this,
//   getName: function () {
//     console.log(this);
//     return this.name;
//   },
//   getAge: () => {
//     console.log(this); //parent's scope --> window
//     return this.name;
//   },
//   getInf1: function () {
//     setTimeout(() => {
//       console.log(this); //student object
//     }, 2000);
//   },
//   getInf2: function () {
//     setTimeout(function () {
//       console.log(this); //window
//     }, 2000);
//   },       
// };

// student.getInf1();
// student.getInf2();



// //question
// let squ = (n) => n * n;

// let id = setInterval(() => {
//   console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
// }, 10000);

// //assignment
// Q1
// arr = [2, 6, 12];
// const arrayAvrage = (arr) => {
//   let total = 0;
//   for (let number of arr) {
//     total += number;
//   }
//   return total / arr.length;
// };
// console.log(arrayAvrage(arr));

// Q2
// Q3






// let a = [2, 34, 22, 55, 66, 77, 3, 4];

// let arrAvg = (arr) => {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     let x = (total / arr.length);
//     return Math.floor(x);
// }

// console.log(arrAvg(a));
