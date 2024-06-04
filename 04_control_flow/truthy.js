const userEmail = []
if(userEmail) {
    console.log("Got user email.")
} else (
    console.log("Did not get user email.")
)

//  How to check a array is empty or not

const myArr = [1];
if(myArr.length === 0 ){
    console.log("Array is empty");
}
else  {
    console.log("Array is not empty.")
}

// How to check a object is empty or not

const myObj = {user: "manoj"};
if(Object.keys(myObj).length === 0){
    console.log("Object is empty");
}
else  {
    console.log("Object is not empty.")
}

// make an array of object's keys

const myNewObj = {
    userName: "manoj",
    age: 23,
    rollNo: "BTS023",
    cntLoc: "Kolkata"
}
console.log(Object.keys(myNewObj));

// make an array of object's values
console.log(Object.values(myNewObj));
