//  object decleration 

// const objOne = new Object(); 
// console.log(objOne);
// const objTwo = {}; // literal object
// console.log(objTwo);

const myInfo = {} // empty objects

//adding keys and values to object

myInfo.name = "sdfadfnoj";
myInfo.email = "ghhid43@fsd.com";
myInfo.age = 18;

// console.log(myInfo);

// objects under a object

const myFllInfo = {
    email: "manfdjsfadf@fsafasdf.com",
    myInfo,
    address: "",
    myarr: [1, 2, 3, 4, 5, 6]
}
// console.log(myFllInfo);
// console.log(typeof myFllInfo.myarr);
// console.log(myFllInfo.myarr[1]);

// we can nest array , objects in a object

// methods in objects

const obj1 = {a1: 1, b1: 2};
const obj2 = {a2: 3, b2: 4};
const obj3 = {a3: 5, b3: 6};

//const ConObj = Object.assign(obj1, obj2, obj3); //(target, source)
// tere the targer is obj1
// console.log(ConObj);
// console.log(obj1); // value of obj1 will change

//
const ConObj2 = Object.assign({}, obj1, obj2, obj3); //(target, source)
// here the target in empty object
// console.log(ConObj2);
// console.log(obj1); // value of obj1 will not change


// We can inplement above using spreade(...ObjName)
const ConObj3 = {...obj1, ...obj2, ...obj3};
console.log(ConObj3);