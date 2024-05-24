// old style Srings in js

let name = "Manoj";
let ser_name = "Mondal"

// console.log(name + " " +ser_name);

// Modern String Format
console.log("******************* Modern String Format ************************");

// backticks is used

// console.log(`Hello my name is ${name} and my sername is ${ser_name}`);


// String decleration

const name2 = "manoj" // old school

const mySerName = new String('hitesh');

// console.log(mySerName);

// console.log(mySerName[0]);

// console.log(mySerName.length);
// console.log(mySerName.charAt(3));
// console.log(mySerName.indexOf('n'));
const newString = mySerName.split(' ');
// console.log(newString);

const anotherName = mySerName.slice(-8, 4);
// console.log(anotherName);

const myALphaName = "   Maafsa      manfauf     ";
console.log(myALphaName);
console.log(myALphaName.trim());
console.log(myALphaName.replace("aa", "hh"));