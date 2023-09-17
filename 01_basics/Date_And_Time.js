let date = new Date();
console.log(date.toLocaleString())

let localtime = new Date();
let temp = localtime.toDateString();
console.log(temp)
let currTime = new Date();
console.log(currTime.toLocaleDateString())
console.log(currTime.getDate())
console.log(currTime.getFullYear())
console.log(currTime.getTimezoneOffset())
console.log(currTime.getDay())
console.log(currTime.getMonth()+1)