// // DOM Event 

// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function (){
//     console.dir('button was clicked');
// }

// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick = sayHello; // when button is clicked display sayHello
//     btn.onmouseenter = function(){        // when a mouse entered on an element
//         console.log("you hover on button"); 
//     }
// }
// function sayHello  (){
//     alert("hello");
// }



// //**Event listener

// // let btn = document.querySelector("button");

// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", Double clicked);
// }
// function sayHello  (){
//     alert("hello");
// }
// function sayName(){
//     alert("my name is Deepak");
// }
// function dblclick (){
//     console.log("you double click");
// }


{ // Activity

    // let btn = document.querySelector("button");

    // btn.addEventListener("click", function(){
    //     let h1 = document.querySelector("h1");
    //     let randomColor = getRandomColor();
    //     h1.innerText = randomColor;

    //     let div = document.querySelector("div");
    //     div.style.backgroundColor = randomColor;

    //     console.log("random color generated"); 
    // })

    // function getRandomColor(){
    //     let red = Math.floor(Math.random() * 255);
    //     let green = Math.floor(Math.random() * 255);
    //     let blue = Math.floor(Math.random() * 255);

    //     let color = `rgb(${red}, ${green}, ${blue})`;
    //     return color;
    // }
}


// // we can add event listener on every element on page 
// // ex.-->

// let p = document.querySelector("p");
// p.addEventListener('click', function(){
//     console.log("your click pragarpha");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("you entered in box");
// });



// // this in event listener 
// let btn = document.querySelector("#btn500");
// btn.addEventListener("click", function(){
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "green";
// });

// // more example.--> 
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// h1.addEventListener("click", colorSet);
// h3.addEventListener("click", colorSet);
// p.addEventListener("click", colorSet);

// function colorSet(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
// }



// //Keybord evnet
// let btn = document.querySelector("#btn400");
// btn.addEventListener("click", function(event){  //by default event argument aata he video me samjaya he 
//     console.log(event); //pointer event 
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(e){
//     console.log(e); // keybord event
//     console.log("key was presed");
// });

// inp.addEventListener("keydown", function(event){
//     console.log(event.key, " is the key");
//     console.log(event.code, " is the key code");
// });



// // form events // form ke liye event listener
// let form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault(); // action hone se rokata he   
//     alert("form submited");
// });


// //** Extrating form data
// let form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();  

//     let inp = document.querySelector("#user");
//     console.log(inp.value);
//     let pass = document.querySelector("#pass");
//     console.log(pass.value);
// });

// // more simple way to get data or element value from form 
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();  
//     console.dir(form);

//     let inp = this.elements[0]; // or form.elements[0]    // simple way
//     let pass = this.elements[1]; // or form.elements[1]

//     console.log(inp.value);
//     console.log(pass.value);
// });



// // more event
// //chang event and input event  // work only on input, textarea and select
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function () {  // video me samjaya he 
//     console.log("change evnet value changed");
//     console.log("change event value is = ", this.value);
// });
// user.addEventListener("input", function () { // video me samjaya he 
//     console.log("input value changed");
//     console.log("input value is = ", this.value);
// });


// //activity
let input = document.querySelector("#text");
let p = document.querySelector("p");

input.addEventListener("input", function(){
    console.log(input.value);
    p.innerText = input.value;
});


// assignment questions
