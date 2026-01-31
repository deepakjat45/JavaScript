
// //Event bubbling 
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(event){
//     event.stopPropagation(); // to stop event bubbling 
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation(); // to stop event bubbling
//     console.log("ul was clicked");
// });

// for (li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation(); // to stop event bubbling 
//         console.log("li was clicked");
//     });
// }



// Todo app 

let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

button.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = 'delete';
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value = "";

});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let lisItm = event.target.parentElement;
        lisItm.remove();
    }
});
