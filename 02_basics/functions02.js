//local and global scope of var and let 
// we can define variable with three ways
// var a , let a , const a
// why not use var 
// var a = 90;
// let b =30;
// if(true){
//     // inside the local Scope
//    var  a = 89;
//    let  b = 78;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);
// difference b/w var & let is depends upon scope.
// variable defind  with  let can have differnt values in different scopes but in case of var if we reintialize the variable inside the scope and we want to access the variable at local scope the the value will change with new intialized value which is not good for a programmer
// scope variable with mini hoisting

//console.log(addone(5)); // this line will give you an error that cannot access addone before initialization
const addone = function(num){
    return num +1;
}
//console.log(addone(5));

console.log(addtwo(5)); // but this is allowed 
function addtwo(num){
    return num + 2;
}
// deep dive into the functions scope

//  function demo(){
//     const b12 = 98;
//    // console.log(a12); //this line should return an error that a12 is not defind
//     function demo2(){
//         const a12 = 34;
//         console.log(b12);   // this line should give the result 98

//     }
//    demo2()
// }
// demo()