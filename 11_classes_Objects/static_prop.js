class User {
    constructor(username){
        this.username = username;

    }

    // method
    logMe(){
        console.log(`Username is ${this.username}`);
    }

    createId(){
        return `123`;
    }

    // access deney
//     static createId(){
//         return `123`;
//     }
}

const userOne = new User("manoj32");
console.log(userOne.createId());
