// function multiPly(num){
//     return num * 5;
// }

// console.log(multiPly(5));
// // adding key in multiPly() function
// multiPly.power = 2;
// console.log(multiPly.power);
// console.log(multiPly.prototype);

// function createUser(username, price){
//     this.username = username;
//     this.price = price;
// }

// createUser.prototype.increment = function(){
//     this.price++;
// }

// createUser.prototype.printMe = function(){
//     console.log(`Price is ${this.price}`);
// }

// const chai = new createUser("chai", 25);
// const tea = new createUser("tea", 250);
// chai.printMe();
// chai.increment();
// console.log(chai.price);




// Prototype.

let myHero = ["thor", "spider"];
let heroPower = {
    thor: "hammer",
    spider: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spider}`);
    }
}

// adding a method to Object for all
Object.prototype.manoj = function(){
    console.log(`Manoj is present in all objects.`)
}

// adding method to Array
Array.prototype.heyManoj = function(){
    console.log("Manoj says hello");
}
// console.log(heroPower);
// console.log(heroPower);
// heroPower.getSpiderPower();
// manoj();
// heroPower.manoj();
// myHero.manoj();
// myHero.heyManoj();
// heroPower.heyManoj();

const name = "manoj";
String.prototype.myname = function(){
    console.log("It's me.")
}
// name.myname();

// inheritance

const User = {
    username: "manoje3",
    email: "sndfks34@gmail.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: true
}
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    // Adding refrent or inheariting
    __proto__: TeachingSupport // old approach
}
Teacher.__proto__ = User;

// new approach
// Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "dsdbfdsfbs           ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"manoj            ".trueLength()