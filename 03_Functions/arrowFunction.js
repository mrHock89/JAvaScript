// Function declearation
//     function chai() {
//     let username = "manoj";
//     console.log(this.username);
//     console.log("Hello World");
// }

// Function Expression
// const chai = function() {
//     let username = "manoj";
//     console.log(this.username);
//     console.log("Hello World");
// }


// Arrow Function

const chai = () => {
    let username = "manoj";
    console.log(this.username); // undefine
    console.log(this); // empty object {}
    console.log("Hello World");
}
chai();
