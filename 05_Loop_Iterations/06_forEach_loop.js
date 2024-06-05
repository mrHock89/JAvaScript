const coding = ["ruby", "python", "cpp", "php"];
// coding.forEach( (items) => {
//     console.log(items);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (items, index, arr) => {
//     console.log(items, index, arr);
// })



const myCoding = [
    {
        language: "JavaScript",
        extension: "js"
    },
    {
        language: "Java",
        extension: "java"
    },
    {
        language: "Python",
        extension: "py"
    }
]

// console.log(myCoding);

myCoding.forEach( (item) => {
    console.log(item.language);
})