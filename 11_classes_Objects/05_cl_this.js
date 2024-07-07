function setUsername(username) {
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email;
    this.password = password
}

const chai = new createUser('mcskn', 'dwfw@gmail.com', '434rf');
console.log(chai);