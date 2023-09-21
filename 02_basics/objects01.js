// Declaration of object
const obj = {
    name: "vikas",
    age: 20,
    gender: "M",
    Education:"bachelor's"
}
console.log(obj)
// another way of Declaring Object
let student = new Object();
student.name = "vikas Dwivedi";
student. age = "20";
console.log(student);
// Ok one more way
console.log(obj["name"]);
console.log(student["age"]);
// Objects are also created using create() constructor
const me = Object.create(student)
console.log(me)
