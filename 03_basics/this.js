const user = {
    username: "Manoj",
    price: 999,
    message: function() {
        console.log(`${this.username}, Welcome to website`); // this is user fofr current context. It is used to access the value of current context
        // console.log(`${user.username}, Welcome to website`);
        console.log(this)
    }
}
// console.log(user);
// console.log(user["username"]);
// console.log(user.username);
// console.log(user.message());
user.message();

user.username = "Suporna";
user.message();
console.log(this); // this will print global empty object {}