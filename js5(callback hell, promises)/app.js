// // call stack

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
//     console.log("success1 data1 saved");
//     savetoDb("apna collage 2", () => {
//         console.log("success2 data2 saved");
//         savetoDb("apna collage 3", () => {
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
// Promise ek object hot he jisake andar resolve and reject do function hote he
//ex--->
function savetoDb(Data) { // savetoDb fun. jo data leta he 
  return new Promise((resolve, reject) => { // new promise jo ya to resolve hoga ya reject hoga 
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data saved"); // resolve ko call jayega 
    } else {
      reject("failure : weak connction"); // reject ko call jayega 
    }
  });
}


// promises object ke andar do method hote he promises.then and promises.catch
// promis resolve hone ke bad .then wala kam hoga or reject hone ke bad .catch wala kam hoga 
// promises return hone ke bad kay karna he ye .then me likhana hoga or error aane par .catch me likahna hoga 

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


// // multiple .then use kar sakate he 
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


// .then() also give a new promise to the next .then()
//Q
Promise.resolve(5) 
  .then((x) => x * 2)  //x value became 5 // after the Operation .then give new promise with x value 10  
  .then((x) => console.log(x)); 
