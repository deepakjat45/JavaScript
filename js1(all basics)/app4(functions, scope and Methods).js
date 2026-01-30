// // Functions

// function hello(){
//     console.log('hello');
// }

// //call function
// hello();

// function pirntName(){
//     console.log('raj');
//     console.log('priya');
//     console.log('deepak');
//     console.log('kalu');
//     console.log('rahul');
// }

// function print1to5(){
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }

// pirntName();
// print1to5();

// //function with atributs
// function name(name){
//     console.log('your name is:',name)
// }
// name('maya');

// // Questions
// function calcAvrage(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// console.log(calcAvrage(5,7,3));


// function getTable(n){
//     for(let i=1; i<=10; i++){
//         console.log(i*n);
//     }
// }
// console.log(getTable(9));


// //return keyword:-
// function sum1(a,b){
//     return a+b;
//     // return ke bad ka koi code Execute nahi hota he
// }
// console.log(sum1(4,3));

// // questions
// function getsum(n){
//     let sum = 0;

//     for(let i=0; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(getsum(10000));


// let str = ['raj', 'deepak','rahul','maya','kalu'];
// let cars = ['audi', 'bmw','toyota','suzuki','rangrover'];
// function concat (str){
//     let result = '';

//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str));
// console.log(concat(cars));


// //Scope

// let x = 3; //Global scope

// function calsum(a,b){
//     let sum = a+b; //function scope
// }
// console.log(sum);  // error because sum not accessable outside function

// {
//     let a=5; //block scope
// }

// function a(){
//     let b=5;
//     function innear(){
//         console.log(b);
//         let c=3; //lexical scope

//     }
//     // console.log(c);  //error
//     innear();
// }
// a();


// // function Expressions
// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(6,7));


// //Higher Order function
// function greet (){
//     console.log('hello');
//     console.log('hii');
// }
// function multiGreet(fun, n){
//     for(let i=0; i<n; i++){
//         fun();
//     }
// }

// multiGreet(greet,10);


// function oddEvenTest(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log(!(n%2 == 0));
//         }
//     } else if(request == "even") {
//         return function(n) {
//             console. log(n%2 == 0);
//         }
//     } else {
//         console.log("wrong request");
//     }
// }

// let checkOdd = oddEvenTest("odd");
// console.log(checkOdd(2));



// //Methods
// const calculater = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b) {
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// };
// console.log(calculater.sub(6,4));

// const calculater2 = {   //short hand
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b) {
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     }
// };
// console.log(calculater2.add(6,4));


// // Assignament Questions
// //Q1
// let arr = [5,9,8,7,3,1,8];
// function bigerThen(n){
//     arr2 = [];
//     for(let i=0; i<=arr.length; i++){
//         if(arr[i]>n){
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }
// console.log(bigerThen(5));

//Q2
// let str = 'abcdefthiabcdefghiabcdefghijk';
// function uniquechar(str){
//     result = '';
//     for(let i=0; i<str.length; i++){
//         if(!result.includes(str[i])){
//             result += str[i];
//         }
//     }
//     return result;
// }
// console.log(uniquechar(str));


// // Q3
// let a = ['india','bhutan','china','united asia','saudiArab'];
// function longName(arr){
//     lname = '';
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].length>lname.length){
//             lname = arr[i];
//         }
//     }
//     return lname;
// }
// console.log(longName(a));


// Q5
// function randomInRange(start, end) {
//     return Math.floor(Math.random() * (end - start + 1)) + start;
// }

// console.log(randomInRange(5, 10));
