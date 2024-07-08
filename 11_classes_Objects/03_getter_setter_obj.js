const user = {
    _email: "dnjdfnd@gmail.com",
    _password: "ferfj34",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

// console.log(user._email);
const tea = Object.create(user);
console.log(tea._email);
console.log(tea.email);