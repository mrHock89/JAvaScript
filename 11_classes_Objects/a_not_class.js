function User(usernaeme, email, password){
    this.usernaeme = usernaeme;
    this.email = email;
    this.password = password;
}

User.prototype.encriptPassword = function(){
    return `${this.password}afakv`;
}

User.prototype.toUppercase = function(){
    return `${this.usernaeme.toUpperCase()}`;
}

const userOne =new User("manoj74", "vkbas34@gmail.com", "nsdkj1344h");
console.log(userOne);
console.log(userOne.encriptPassword());
console.log(userOne.toUppercase());
