// function is a block of code used to perform specific task 

// i know that basics let see intermediate
// Rest Operator (...) -> through rest operator we can give multiple parameter to a fuction and it will add  all the parameters as an array.
function myfun(...val){
    return val;
}
console.log(myfun(1,2,3,4,5));
// passing array as a parameter inside the fuction

function fun2(arr){
    return arr;
}
console.log(fun2([10,11,12,13]));

// now lets make a cart using Rest Operator
