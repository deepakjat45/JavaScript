// //DOM 
// select and manipulating elements 

// //select element
// console.dir(document.getElementById('mainImg')); //by id
// console.dir(document.getElementsByClassName('mainImg')); //by Class
// console.dir(document.getElementsByTagName('mainImg')); //by Tag

// //**query selector 
// console.dir(document.querySelector("p")); //select first p element 
// console.dir(document.querySelector("#mainImg")); //select first by id element
// console.dir(document.querySelector(".oldImg")); //select first by class element

// console.dir(document.querySelectorAll("p")); //select all p element  


// //manipulating attrubutes
// let img = document.querySelector("img");
// img.getAttribute("id"); // get id of main img   
// // img.setAttribute('id','spidermanimg'); // cnange id of main img
// img.setAttribute('src', "creation_1.png"); // change src(link) of main img
 

// // manipulating style
// let heading = document.querySelector("h1");
// heading.style.color = "blue";
// heading.style.backgroundColor = 'yellow';
// heading.style.fontSize = '100px';

// let links = document.querySelectorAll('.box a' );
// for(let i=0; i<links.length; i++){
//     links[i].style.color = "red";
// }

// // manipulating style using classList 
// let heading = document.querySelector("h1");
// console.dir(heading.classList);  //to show classes of element 
// heading.classList.add("abc"); // add class 
// console.dir(heading.classList);
// heading.classList.remove('abc'); // remove class
// console.dir(heading.classList);
// console.dir(heading.classList.contains("abc")); //false or true  // to chack class is exists or not 
// heading.classList.toggle("xyz"); //to toggle between add and remove


// //Navigations
// let h4 = document.querySelector('h4');
// h4.parentElement; //to know parent element 
// let div = document.querySelector('div');
// div.children; // to know childrens of an element
// let ul = document.querySelector("ul");
// ul.previousElementSibling; // to get upper sibling of element
// ul.nextElementSibling; // to get nxt sivling of element 


// // Adding Element to document 
// let newP = document.createElement("p"); // to create Element 
// console.dir(newP);
// newP.innerText = "hii i am new Paragraph";
// let body = document.querySelector("body");
// body.appendChild(newP); // to insert new element

// newP.append("  --> hello this is more text"); // to make changes in any element or add things to end 
// newP.prepend("this is text in the starting,<--  "); // to add text or things to in element in the start


// //insertAdjacentElement() // video me samjaya he 
// let btn = document.createElement("button");
// btn.innerText = "new button!!!";
// let p = document.querySelector("p");
// // p.insertAdjacentElement("beforebegin", btn); //element ke shuru hone se pahele add hoga 
// // p.insertAdjacentElement('afterbegin', btn);  //element ke andar hi suru me add hoga
// // p.insertAdjacentElement('beforeend', btn); // element ke andar he end me add hoga
// // p.insertAdjacentElement('afterend', btn); // element ke end hoen ke bad me add hoga


// // remove element 
// let body = document.querySelector("body");
// let p = document.querySelector('#description');
// // body.removeChild(p); //to remove child element  
// p.remove(); //  To Directly remove element
