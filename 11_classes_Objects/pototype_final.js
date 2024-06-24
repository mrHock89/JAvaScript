// let myName = "kakashi        ";
// // console.log(myName.trim().length);
// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.manoj = function(){
    console.log("manoj is present in all object");
}

Array.prototype.heyManoj = function(){
    console.log("Manoj says hello");
}

// heroPower.manoj();
// heroPower.getSpiderPower();
// myHeros.manoj();
// myHeros.heyManoj();
// heroPower.heyManoj();


// inheritance

const user = {
    name: "sdkajjfn",
    email: "dsfksa@google.com"
}

const Teacher = {
    makevideo: true
}

const TeacherSupport = {
    isavailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // link two object
    // old style
    __proto__: TeacherSupport // accessing inside
}

// accessing from outside
Teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUsername = "dgfdsfg       "

// using string
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

// using `
Object.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
"manoj   ".trueLength();
anotherUsername.truelength();
"manoj   ".truelength();