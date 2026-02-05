// //using axios

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//     try {
//         let res = await axios.get(url);
//         // console.log(res); // or
//         console.log(res.data.fact);
//     } catch (e) {
//         console.log("Error - " + e);
//     }
// }

// // activity show cat fact and dog image on page by pressing button
// let button = document.querySelector("button");
// let url = "https://catfact.ninja/fact";

// button.addEventListener("click", async () => {
//     let fact = await getFact();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerHTML = fact;
// })

// async function getFact() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("Error - " + e);
//         return "No fact found please try again after some time";
//     }
// }


// let button2 = document.querySelector("#button2");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// button2.addEventListener("click", async () => {
//     let link = await getDogImg();
//     // console.log(img);
//     let dogImg = document.querySelector("#result2");
//     dogImg.setAttribute("src", link);
// })

// async function getDogImg() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//         console.log(res);
//     } catch (e) {
//         console.log("Error - " + e);
//         return "No img found";
//     }
// }


// //sending headers with api request
// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = { headers: { Accept: "application/json" } };
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch (e) {
//         console.log("Error : ", e);
//     }
// }



// //activity
// //get colleges by country name

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let country = document.querySelector("input").value;
//   console.log(country);

//   let colArr = await getColleges(country);
//   show(colArr);
// });
 
// function show(colArr) {
//   let list = document.querySelector("#list");
//   list.innerText = "";
//   for (col of colArr) {
//     console.log(col.name);

//     let li = document.createElement("li");
//     li.innerText = col.name;
//     list.appendChild(li);
//   }
// }

// async function getColleges(country) {
//   try {
//     let res = await axios.get(url + country);
//     return res.data;
//   } catch (e) {
//     console.log(e);
//   }
// }
