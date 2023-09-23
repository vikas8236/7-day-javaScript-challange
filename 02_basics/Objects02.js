// singlton object
//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123av";
tinderUser.name = "vikas";
tinderUser.isloggedIn = false;

console.log(tinderUser);
// Object inside Objects
const regularUser = {
    email: "vikas@gmail.com",
    fullname: {
        firstname: "vikas",
        lastname: "Dwivedi"
    }
}
console.log(regularUser.fullname.firstname);
// How to combine two Objects
// first Method (Not convenient )
const obj1 = {1:"a", 2:"b",3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}
const obj3 = {obj1, obj2};
console.log(obj3);
// second Method (By using assign())
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);
// third Method (most used)
const obj5 = {...obj1, ...obj2}
console.log(obj5);
// array of Objects
const arr = [
    {
        id: 1,
        email:"xyz@gmail"
    },

    {
        id: 2,
        email:"abc@gmail"  
    }
]
console.log(arr[0].id)
// object.keys()
console.log(Object.keys(tinderUser));
// Object.values()
console.log(Object.values(tinderUser));
// Object.entries()
console.log(Object.entries(tinderUser));
// Object.hasOwnProperty()
console.log(tinderUser.hasOwnProperty('isloggedIn')
);



