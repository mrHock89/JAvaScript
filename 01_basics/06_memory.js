// Stack memory

let myName = "Manoj";
let myNName = myName;

console.log(myNName);

myNName = "Anirban";
console.log(myNName);

// Object

let users = {
    email: "manojmondal9900@gmail.com",
    userName: "koru09"
}

console.log(users.email);

users.email = "manoj932@gmail.com"
console.log(users.email);

// Heap

let userTwo = users;

userTwo.email = "dsfsajfh345@gmail.com"
console.log(users.email);