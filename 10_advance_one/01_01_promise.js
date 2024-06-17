// using variable
const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Hello");
        resolve();

    }, 1000);
});

promise.then(function(){
    console.log("Promise Consumed");
})

// Without using variable0000000000000000000000000000000000000000

promiseTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Hello");
        resolve();

    }, 1000);
}).then(function(){
    console.log("Promise Consumed");
})

// passing the vale to promise 

promiseTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Hello");
        // passing value to consumed function
        resolve({username: "Manoj", age: "23"});

    }, 1000);
}).then(function(user){
    console.log("Promise Consumed");
    console.log(`${user.username}'s age is ${user.age} .`);
})

// Promise 4

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "Manoj", age: "23"});            
        }else {
            reject('Error: Something went wrong.');
        }
    }, 1000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is finally resolved.")
});


// promise 5:

const promiseFive = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "javaScript", password: "21233"});            
        }else {
            reject('Error: JS went wrong.');
        }
    }, 1000);
});

// using async await

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


// API
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data =await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }
// getAllUsers()

// using try catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) =>{
    console.log(error);
})