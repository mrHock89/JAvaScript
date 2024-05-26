// Symbol declearation

const mySym = Symbol("key1");
console.log(mySym);
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

console.log(myObject.name); // This type os access only work for name: "manoj". will not work "name": "manoj"

// method 2:

console.log(myObject["name"]); // will work for name: "manoj" and "name": "manoj"

// method 3:
console.log(myObject["Fill Address"])

// Accessing symbol
console.log(myObject[mySym]);

// Full object print

console.log(myObject);

