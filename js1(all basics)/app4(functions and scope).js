// // Functions

// function hello(){
//     console.log('hello');   
// } 

// function pirntName(){
//     console.log('raj');
//     console.log('priya');
//     console.log('deepak');
//     console.log('class');
//     console.log('rahul');
// }

// function print1to5(){ 
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }
// //call function
// hello();
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
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// console.log(getTable(4));


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
// console.log(getsum(13));


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
// let sum = 3; //Global scope
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
//     innear();
// }
// a();


// // function Expressions
// let sum = function(a,b){
//     return a+b;
// }
// sum(6,7); 


// //Higher Order function 
// function multiGreet(function, n){
//     for(let i=0; i<n; i++){
//         function();
//     }
// }
// let greet = function(){
//     console.log('hello');
// }
// multiGreet(greet,100);


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
// console.log(calculater.mul(6,4));

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


// Assignament Questions
//Q1
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


//Q3
// let a = ['india','bhutan','china','united kindom','saudiArab'];
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
