// Spread Operator into JavaScript 
// -> Spread expands an array into its elements
// -> Spread is used to merge 2 or more arrays into single array.
// -> Through Spread operator You can modify the array you can just merge two or more arrays and store the merged array into another array. 
let arr = [1,2,3,4,5,6]
let arr2 = ['a', 'b','c','d']
let arr3 = [...arr, ...arr2 ]
console.log(arr3)

// Concat Method into javaScript


/* The concat() string method in javascript combines two or more strings and returns a new string. This method doesn't make any change in the original string. This concat() method is a function of the String object in javascript therefore, it has to be invoked through a particular instance of the String class.
*/ 
 
/* The concat() method in javascript concatenates the string arguments to the calling string and returns a new string. Changes to the original string or the returned string don't affect the other.

If the arguments are not of the type string, then they have to be converted to string values before combining. */ 

// Ye to bat ho gayi String object ke function concat() ki ab experiment karte hain arrays ke sath

console.log(arr.concat(arr2))
//  result is same as Spread operator so we can say both are similar in case of arrrays atleast.

//  Flat Method 

// -> flat method is an inbuilt array method that flattens a given array into a newly created one-dimensional array. 
// -> we can specify the depth limit to   where we need to flatten the array. 
// -> By default, the depth limit is 1.
// -> we can modify the existing array with flat but we can change the copy of array.
// -> We can also give the depth Infinity.
console.log("this is flat method:");
let a = ['1','2','3','4',['5',['6'],'7']];
let newarr = a.flat(Infinity)
console.log(newarr)

// isArray()

console.log(Array.isArray("vikas")); // this will return False because there is no array exist of vikas.

console.log(Array.isArray(a)); // this will return true because there is an array of a.

// from() method
// -> it is used to create an array from the string or any iterable object.
// creating array from the string

console.log(Array.from("vikas")) 

// Of() method of array
// converting the independent values into the array using the of()
let d= 23;
let b = 87;
let c = 89;
console.log(Array.of(d,b,c)) // result -> [23, 87, 89]