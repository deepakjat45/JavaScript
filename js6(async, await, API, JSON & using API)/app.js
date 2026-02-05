// // async function 

// // async keyword
// async function greet() {
//     // throw "some random error";  // we use to throw an error
//     return "hello";
// }

// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("result was : ", result);
//     })
//     .catch((err) => {
//         console.log("promise was reject with error :", err);
//     });


// // await keyword 
// function getNum (){
//     return new Promise((resolve, reject) => {
//         setTimeout( ()=>{
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     getNum();
//     await getNum(); // ek kam hone par dusara suru hoga
//     await getNum(); // await keyword ki vajahe se hi hum async function use karte he 
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }


// //ex.-->
// let h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("color changed");
//         }, delay);
//     });
// }

// async function demo(){
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     changeColor("yellow", 1000);    
// }


// //handiling rejection with await 
// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if (num < 3) {
//                 reject("promise reject");
//             }

//             h1.style.color = color;
//             console.log("color changed to: " + color);
//             resolve("color changed");
//         }, delay);
//     });
// }

// async function demo() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("green", 1000);
//         await changeColor("orange", 1000);
//     } catch (err) {
//         console.log(err);
//     }


//     let a = 5;
//     console.log(a);
// }
//--------------------------------------------------------------------


// // API

// //what is API
// // what is JSON

// // Accissing JSON Data
// let json_Response = '{"fact":"A cats appetite is the barometer of its health. Any cat that does not eat or drink for more than two days should be taken to a vet.","length":132}'

// let Data = JSON.parse(json_Response);
// console.log(Data.fact); 


//API testing tools
// what is Ajax
//Http verbs
// States code

// **add info to api url 
// http headers


// // our first Api request
// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => { 
//         // console.log(res);
//         return res.json();
//     })
//     .then((Data)=>{  //res.json() ki value Data me store ho gayi 
//         console.log(Data.fact);
//         console.log(Data.length);
//     })
//     .catch((err) => {
//         console.log("ERROR = " + err);
//     });


// // first api fetch using async and await
// let url2 = "https://catfact.ninja/fact";

// async function getFact() {
//     try {
//         let res = await fetch(url2);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url2);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch (e) {
//         console.log("Error - " + e);
//     }
// }

// getFact();  
