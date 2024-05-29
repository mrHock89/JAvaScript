// const myObj = {
//     name: "manoj",
//     age: 21,
//     class: 12,
//     address: "najdhf"
// }

// // console.log(myObj);
// // console.log(myObj.name);
// // console.log(myObj["name"]);

// const {name: Nmane} = myObj;
// console.log(Nmane);

const course = {
    courseName: "JavaScript",
    price: "1234",
    courseINstructor: "Myself"
}

const {courseName} = course;
console.log(courseName);
const {courseINstructor: teacher} = course;
console.log(teacher);