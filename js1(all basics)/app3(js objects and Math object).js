//js objects
{
    // let student = {
    //     name: 'deepak',
    //     age: 22,
    //     mark: 75.98
    // }
    // const post = {
    //     username: "deepak jat ",
    //     contant: "hello my name is deepak and i am doing js",
    //     liks: 353,
    //     repost: 54,
    //     tags: '#hello #deepak #kaka'
    // };

    // //get value
    // console.log(post['username']);
    // console.log(post.username);

    // //update value
    // post.liks = 125;
    // console.log(post.liks);
    // post['liks'] = 150;
    // console.log(post.liks);

    // //add value
    // post.username = 'raj';
    // console.log(post.username);

    // //delete
    // delete post.username;

    // //objects of object
    // const classInfo = {
    //     raj: {
    //         gread: 'A',
    //         city: 'mumbai'
    //     },
    //     deepak: {
    //         gread: 'A+',
    //         city: 'nizar'
    //     }
    // };
    // console.log(classInfo.raj.city);

    // //array of objects
    // const infoClass = [
    //     {
    //         name: 'shrdha',
    //         marks: 56.7
    //     },
    //     {
    //         name: 'kalu',
    //         marks: 45.5
    //     },
    //     {
    //         name: 'pavan',
    //         marks: 94.0
    //     }
    // ];
    // console.log(infoClass[0].marks);
}

// **Math Object
{
    // Math.PI;
    // Math.E;

    // //method
    // console.log(Math.abs(-12)); //abslute value
    // console.log(Math.pow(2, 4)); //a^b
    // console.log(Math.floor(12.9999)); // nearest, smallest, integer value
    // console.log(Math.ceil(12.0001)); //nearest, bigest, integer value
    // console.log(Math.random()); // make random value from 0 to 1 but not 1


    // //**making random inntegers // random number 
    // let num = Math.random();
    // num *= 10
    // num = Math.floor(num);
    // num += 1;
    // console.log(num);

    // // short hand 
    // let random = Math.floor(Math.random() * 10) + 1;
    // console.log(random);

    // //random number from 1 to 100
    // let ranNum = Math.floor(Math.random() * 100) + 1;
    // console.log(ranNum);
    // let ranNum2 = Math.floor(Math.random() * 10) + 21; //num from 21 to 30
}


// //guessing the number game

// const maxNum = prompt("enter max num");
// const num = Math.floor(Math.random() * maxNum) + 1;
// let guessNum = prompt("guess the num");

// while (true) {
//     if (guessNum == "quit") {
//         console.log("user quit");
//         break;
//     }
//     if (guessNum == num) {
//         console.log("you are right");
//         break;
//     } else if (guessNum < num) {
//         guessNum = prompt('your guess was to low guess something high');
//     } else if (guessNum > num) {
//         guessNum = prompt('guess is high guess something low');
//     }
// }
