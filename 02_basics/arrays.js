const arr = [10, 11, 12, 13, 14, 15]
let i=0;
console.log("The Array1 is :");
for( i = 0;i<arr.length;i++){
   console.log(arr[i])
}
const  arr2 = [3, 'vikas', 'ajay', 36, 'r' ];

console.log("the Array2 is :");
for( i = 0;i<arr2.length;i++){
    console.log(arr2[i])
}
// Array Methods
console.log("after performing the push method Array1 is :");
 arr.push(67);
 for( i = 0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("after pop method array1 is : ");
arr.pop();
for( i = 0;i<arr.length;i++){
   console.log(arr[i])
}

// Shift method is used if we want to delete the element from the start of the array
console.log("After performing the shift Operation arrray1 is :");
arr.shift();

for( i = 0;i<arr.length;i++){
   console.log(arr[i])
}

/*       Slice and Splice Methods in JavaScript    */ 

// The slice() ->  method is used to return a new array containing a portion of that array. It does not modify the original array rather returns a new array.

// types of slice methds based on parameters

   // 1. arr.slice(); // Start is 0 and End is arr.length

   // 2. arr.slice(start); // start is 0 and End is2

   // 3. arr.slice(start,end); Startis 0 and End is 3

   console.log("General Use of slice Method :")

   console.log(arr.slice())      // [10, 11, 12, 13, 14, 15]

   console.log(arr.slice(0,2))   // [10, 11]

   console.log(arr.slice(1))     // [11, 12, 13, 14, 15]

 


//The splice() -> method is used to remove or replace existing elements in the array. This method modifies the original array and returns the removed elements as a new array.

// Splice Method types and use
  
// 1. splice(start)
// 2. splice(start, deleteCount)
// 3. splice(start, deleteCount, item1)
// 4. splice(start, deleteCount, item1, item2, itemN)
// Note -> deletecount and items are optional.
console.log("after using the splice method :")
console.log(arr.splice(3)); //[13, 14, 15 ]
console.log(arr.splice(0,3)); // [10, 11, 12 ]


