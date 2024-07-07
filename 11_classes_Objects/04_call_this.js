function SetUsername(username){
    this.username = username;
    console.log(username);
}

function createUser(username, email, password){
        // setUsername(username);
        SetUsername.call(this, username);
        this.email = email;
        this.password = password;
}

const chai = new createUser("mankj", "jfnsf34@gmail.com", "1234");
console.log(chai);