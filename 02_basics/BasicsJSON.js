// Destructuring of Objects
const course = {
    coursename : "js in hindi",
    courseFee: "free",
    courseInstructor:"hitesh"

}
// course.courseInstructor ->this  can be one option

const {courseInstructor : instructor} = course
console.log(instructor);
// JSON 
// Basics
// {
//     name : "vikas",
//     "coursename" : "js in hindi",
//     "price":"free"
// }
