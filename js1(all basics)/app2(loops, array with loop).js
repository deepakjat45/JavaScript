//loops

//for loop
{
// for(let i=1; i<=15; i++){
//     console.log(i);
// }

// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// for(let i=2; i<=15; i=i+2){
//     console.log(i);n
// }


// infinit loop, 
// for(let i=1; i>=0; i++){   //don't run this code 
//     console.log(i);
// }



// let n = prompt('enter you number');
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// for(let i=1; i<=3; i++){
//     for(let j=1; j<=3; j++){
//     console.log(j);
//     }   
// }
}


// while loop
{
// let i = 4;
// while(i<=20){
//     console.log(i);
//     i++;
// }


// let movie = 'Avator';
// let guess = prompt('which is my faverite movie');
// while(guess != movie){
//     if(guess == 'quit'){
//         console.log('you quit');
//         break;
//     }
//     guess = prompt('worng, enter again');
// }

}



//loops with array 

// let fruits = ['apple', 'mango', 'banana', 'lichi', 'orange', 'papaya'];
// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// let fruits = ['apple', 'mango', 'banana', 'lichi', 'orange', 'papaya'];
// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }

// nested loops with nested array
// let heroes = [ ['thor', 'ironman', 'caption'], ['superman', 'wonderwoman', 'flash']];
// for(let i=0; i<heroes.length; i++){
//     console.log(`List #${i}`);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

// let student = [['raj', 45],['nila', 56],['deepak', 75]];

// for(let i=0; i<student.length; i++){
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j])
//     }
// }



//for of loop

// let fruits = ['mango', 'orange', 'banana','painapple', 'apple'];

// for( fruit of fruits){
//     console.log(fruit);
// }

// let a = 'apnacollage my name';
// for( char of a){
//     console.log(char);
// }

// let  list = [['raj', 'swami','aaj',],['deepak', 'suraj', 'pavan'],['car','bike', 'caycle']];

// for(item of list){
//     for(names of item){
//         console.log(names);
//     }
// }



// practise questions 

// let a =[1,2,8,6,4,6,3,1,6];
// let num = 6;
// for(let i=0; i<a.length; i++){
//     if(a[i] === num){
//         a.splice(i, 1);
//     }
// }
// console.log(a);


let n = 11;
let fac = 1;
for(let i=1; i<=n; i++){
    fac *= i;
}
console.log(fac);

let a = [2,2,5,8,6,4,2,];
let lar=0;
for(let i=0; i<=a.length; i++){
    if(lar < a[i]){
        lar = a[i];
    }
}
console.log(lar);
