// more array Methoed

//forEach //for off loop ki tarha hota he 
//map
//filter
//every
//some
//reduce

//some question solve



// //default parameters
// let sum = function(a, b=4){
//     console.log(a+b);
// }
// console.log(sum(4));


// //spread
// let arr = [3,5,3,1,5,6,4,0];
// console.log(...arr);  //expands iterable into multipal values
// let name = 'deepak jat';
// console.log(...name);

// // spread with arr literals
// let arr0 = [1,5,3,8,6,7,8,5,4,3,8,9];
// let newArr = [...arr0];
// console.log(newArr);
// let newName = [...name];
// console.log(newName);
// console.log(...newArr, ...newName); //dono ek sath

// //spread with object literals
// let data = {
//     name: 'deepak',
//     class: 33,
//     sub: 'english',
// }
// let dataCopy = {...data, mark: 88};
// console.log(dataCopy);

// let arr1 = [1,2,3,4,5];
// let obj = {...arr1};
// console.log(obj);

// let str1 = 'hello class';
// console.log(obj2 = {...str1});



// // Rest
// function sum (...arg){
//     for(let i=0; i<arg.length; i++){
//         console.log(arg[i]);
//     }
// }
// console.log(sum(1,2,3,4,5,9,0));

// function sum1(...argu)  {
//     return argu.reduce( (sum, el) => sum + el);
// }
// console.log(sum1(4,5,3,5,6,4,3,3,4,5,6,3,3,));

// //Distructuring :-
// let names = ['deepak','suraj','pavan','raj','dev','xyz','abc','end'];
// let [winer, runarup] = names;
// console.log(winer, runarup,);

//***** IMP ****//

// //distructuring in objects
// const student = {
//   nmae: "deepak",
//   class: 15,
//   user: "deepak123",
//   pass: 12333,
//   // city: "hama",
// };
// let { user, pass } = student;
// console.log(user, pass);

// // or 
// let { user: username, pass: password } = student;
// console.log(username, password);

// let { city = "jaipur" } = student;
// console.log(city);

// //question
