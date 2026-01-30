console.log("jay shree ram");

// Operators in JS*

// Arithmetic Operators

let a = 3;
let b = 5;

console.log("a =", a, " & b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b); //Modulus
console.log("a**b =", a ** b); //Exponentiation  (3^5)

//unary Operators

// Increment
a++;
console.log("a =", a);

// Decrement
// a--;
// console.log("a =",a);

// esme post increment or pri increment and (a++, ++a)
// post decrement or pri decrement bhi aata he (a--, --a)

// Assignment Operators
let x = 2;
let y = 5;

// x += 3; // (x = x+3)
// console.log("x =",x) //5

// x -= 3;
// console.log("x =", x);

// x *= 3;
// console.log("x =",x);

// x /= 3;
// console.log("x =",x);

x %= 3; //  x = x%3
console.log("x =", x);

x **= 3;
console.log("x =", x);

// Comparison Operators

let p = 6;
let q = 4;
console.log("p =", p, " & q =", q);

console.log("p = q", p == q); //false
console.log("p = q + 2", p !== q); //true
console.log("p = q", p === q); //fals
console.log("p = q", p !== q); //true

console.log("p < q", p < q); //false
console.log("p <= q", p <= q); //false
console.log("p > q", p > q); //true
console.log("p >== q", p >= q); //true

// Logical Operators

// Logical AND &&
let n = 3;
let m = 4;

console.log("3<4 && 4>3 =", n < m && m > n); //true
console.log("3<4 && 4<3 =", n < m && m < n); //false

// Logical OR ||
console.log("3<4 || 4<3 =", n < m || m < n); //true
console.log("3>4 || 4<3 =", n > m || m < n); //false

// Logical NOT !
console.log("!(4>3)", !(m > n)); //false
console.log("!(4<3)", !(m < n)); //true
// _____________________________________________________________________

// Conditional statement

// if Statement
let age = 12;

if (age >= 18) {
  console.log("you can vote");
}

if (age < 18) {
  console.log("you can not vote");
}

// if-else Statement
let mode = "dark";
let coler;

if (mode === "dark") {
  coler = "black";
} else {
  coler = "white";
}
console.log(coler);

let number = 2231;
if (number % 2 === 0) {
  console.log(number, "is even");
} else {
  console.log(number, "is odd");
}

// else-if Statement
let mod = "green";
let coler1;

if (mod === "dark") {
  coler1 = "black";
} else if (mod === "light") {
  coler1 = "white";
} else {
  coler1 = "blue";
}
console.log(coler1);
// _____________________________________________________________________________________

// Ternary Operators
// condition ? true output : false output

let age1 = 45;

let resault = age1 >= 18 ? "adult" : "not adult";

console.log(resault);
// ___________________________________________________________________________

// test Quition's ans.

// let number1 = prompt ("type any number");

// if (number1%5 === 0){
//     console.log(number1,"is multiple of 5");
// } else{
//     console.log(number1,"is not multiple of 5");
// }

// Q2

let score = prompt("type your exam mark");

if ((score <= 100, score >= 90)) {
  console.log("your grade is A");
} else if ((score <= 89, score >= 70)) {
  console.log("your grade is B");
} else if ((score <= 69, score >= 60)) {
  console.log("your grade is C");
} else if ((score <= 59, score >= 50)) {
  console.log("your grade is D");
} else if ((score <= 49, score >= 0)) {
  console.log("your grade is F");
}
