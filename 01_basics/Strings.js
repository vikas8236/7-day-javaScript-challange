// *********methods of Strings********

let name = "vikas"
let age = 20;
console.log(`my name is ${name} and my age is ${age}`);

const str1 = "A string primitive";
const str2 = 'Also a string primitive';
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  console.log(str1.toLowerCase() === str2.toLowerCase());

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true

// check greater string
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

console.log("cat".charAt(1));// gives value "a"

const string4 = new String("A String object");
console.log(string4)