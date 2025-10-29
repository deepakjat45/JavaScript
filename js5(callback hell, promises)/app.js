// call stack

// // visualizing call stack
// function one(){
//     return 1;
// }

// function two (){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);  //3
// }

// three(); 



// // Callback Hell
// let h1 = document.querySelector('h1');

// function changeColor(color, delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, ()=>{
//         changeColor("yellow", 1000, ()=>{
//             changeColor("blue", 1000, ()=>{});
//         });
//     });
// });


// //callback hell example:-

// function savetoDb(Data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }


// savetoDb("apna collage", () => {
//     console.log("success1 your data saved");
//     savetoDb("hello world", () => {
//         console.log("success2 data2 saved");
//         savetoDb("deepak", () => {
//             console.log("success3 data3 saved");
//         }, () => {
//             console.log("failure3: network error");
//         });
//     }, () => {
//         console.log("failure2: network error");
//     });
// }, () => {
//     console.log("failure1: network error");
// });



// Promises   <--(an object)
//ex--->
// function savetoDb(Data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success: data saved");
//     } else {
//       reject("failure : weak connction");
//     }
//   });
// }

// let request = savetoDb("hello"); // request = promises object
// request
//   .then(() => {
//     console.log("promises was resolved");
//     //console.log(request);
//   })
//   .catch(() => {
//     console.log("promises was rejected");
//     //console.log(request);
//   });

// //----or----

// savetoDb("hello")
//   .then(() => {
//     console.log("promises was resolved");
//   })
//   .catch(() => {
//     console.log("promises was rejected");
//   });


// savetoDb("apna collage")
//   .then(() => {
//     console.log("data1 saved");
//     return savetoDb("hello world");
//   })
//   .then(() => {
//     console.log("data2 saved");
//     return savetoDb("deepak");
//   })
//   .then(() => {
//     console.log("data3 saved");
//   })
//   .catch(() => {
//     console.log("promises was rejected");
//   });


// savetoDb("apna collage")
//   .then((result) => {
//     console.log("data1 saved");
//     console.log("result of promises:", result);
//     return savetoDb("hello world");
//   })
//   .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promises:", result);
//     return savetoDb("deepak");
//   })
//   .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promises:", result);
//   })
//   .catch((error) => {
//     console.log("promises was rejected");
//     console.log("error of promises:", error);
//   });
