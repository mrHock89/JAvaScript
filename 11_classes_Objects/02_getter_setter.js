function User(email, password){
    this._email = email;
    this._password = password
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(){
                this._email = value;
        }
    })
}
const userOne = new User("manoj23@gmail.com", "24ffe");
console.log(userOne._email);