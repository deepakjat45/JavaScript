// let myPromise = new Promise((resolve, reject) => {
//   let success = false;  // or true

//   if (success) {
//     resolve("✅ Task done!");
//   } else {
//     reject("❌ Something went wrong!");
//   }
// });

// // Using the promise
// myPromise
//   .then((result) => console.log(result))  // if resolved
//   .catch((error) => console.log(error));  // if rejected



// fetch("https://catfact.ninja/fact")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));



async function getCatFact() {
  try {
    let url = "https://catfact.ninja/fact"
    let res = await fetch(url); // wait for response
    let data = await res.json(); // wait for JSON parse
    console.log(data.fact);
  } catch (err) {
    console.log("Error:", err);
  }
}

getCatFact();
