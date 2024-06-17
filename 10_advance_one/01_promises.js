
// //Method 1 using variable
// // Create a promise
// const promiseOne = new Promise(function(resoleve, reject){
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(() => {
//        console.log("Async task is complete.") 
//        resoleve(); // calling resoleve.
//     }, 1000);
// });

// // consuming promise
// // there is a direct connection between .then and resolve
// promiseOne.then(function(){
//     console.log("Promise consume");
// }) 


// Method 2 without using variable
// new Promise(function(resoleve, reject){
//     setTimeout(() => {
//         console.log('Async task 2.')
//         resoleve()
//     }, 1000);
// }).then(() => {
//     console.log("Promise 2 consumed");
// })


// 3rd promise

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Hello Manoj");
//         resolve({username: "animan0", email: "njkifsd34@gmail.com"});
//     }, 1000);
// });

// promiseThree.then((user) => {
//     console.log("Promise 3 consumed")
//     console.log(user.username);
// });



// promise 4

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username: "dsafhk", password: "1243"});
//         }else {
//             reject('Error: Somiething went wrong.')
//         }
//     }, 1000);
// });

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => {
//     console.log("The promise is finally resolved of rejected");
// });



//promise 5



// getAllUsers()
// different approach to consuming promise.
// using async await

// async function consumePromise(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/mrHock89');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }   
// };
                        
const promiseFive = new Promise(function(resolve, reject) {
setTimeout(() => {
let error = true;
if(!error) {
    resolve({username: "javascript", password: "123"});
} else {
    reject('ERROR: JS went wrong');
}
}, 1000);
});

promiseFive
.then((user) => {
console.log(user);
})
.catch((error) => {
console.log("Promise Error: ", error);
});

fetch('https://api.github.com/users/mrHock89')
.then((response) => {
return response.json();
})
.then((data) => {
console.log(data);
})
.catch((error) => {
console.log("Fetch Error: ", error);
});