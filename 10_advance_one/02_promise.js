/*

Promise: A promise is an object that manages asynchronus operations.
        PENDING -> RESOLVED or REJECTED
        new promise((resolve, reject) => {asynchrnus code})

*/

/**
 Async / Await: async = make a function return a promise
                await = make an async function wait for a promise.
 */

function walDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog");
            }
            else {
                reject("You didn't walk the dog")
            }
        }, 1500);
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenClen = true;
            if(kitchenClen){
                resolve("Kitchen cleaned.")
            }else {
                resolve("Kitchen not cleaned.")
            }
        }, 2500);
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const moveTrash = false;
            if(moveTrash) {
                resolve("Out the trash");
            }else {
                reject("Did not out the trash");
            }
        }, 500);    
    })
}

// using method chain
// walDog().then(value => {console.log(value); return cleanKitchen()})
//         .then(value => {console.log(value); return takeOutTrash()})
//         .then(value => {console.log(value); console.log("Finished")})
//         .catch(error => console.error(error));


// using async/await
async function doChores(){
    try {
        const walDogResult = await walDog();
        console.log(walDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the work.")
    } catch (error) {
        console.error(error);
    }
}

doChores();