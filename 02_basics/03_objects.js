// Symbol declearation

const mySym = Symbol("key1");
// console.log(mySym);
const myObject = {
    name: "manoj",
    "Fill Address": "Nadia, 741502",
    age: 21,
    email: "mafaslf34@gajf.com",
    [mySym]: "Help" // for adding symbol in js Object
}

// in js object objects keys are by default string ("name")

// object access
// Method 1:

// console.log(myObject.name); // This type os access only work for name: "manoj". will not work "name": "manoj"

// method 2:

// console.log(myObject["name"]); // will work for name: "manoj" and "name": "manoj"

// method 3:
// console.log(myObject["Fill Address"])

// Accessing symbol
// console.log(myObject[mySym]);

// Full object print

// console.log(myObject);

// changinging value of a key

myObject.email = "kjfhsidyfsdfwr4@gmail.com"
// console.log(myObject["email"]);

// freeze a key value so that no oone can cange the value
// Object.freeze(myObject); // freezing full object
// Object.freeze(myObject.email); // freezing only a key
// console.log(myObject);
myObject.email = "nfkash234324@chatgpt.com"
myObject.age = 18;
// console.log(myObject); // no change of email in object because of freez


// using function in object
myObject.greeting = function() {
    console.log("Hello JS User");
}

myObject.greeting2 = function() {
    console.log(`Hello JS, ${this.name}`); // srting interpolation
}
//accessing function in objec
myObject.greeting(); // calling function 
myObject.greeting2(); // calling function 
console.log(myObject[mySym]);