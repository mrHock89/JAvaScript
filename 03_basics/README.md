## Day 8: this keyword
<hr>

- This is used to access the value of current context.
> const user = { \
    username: "Manoj", \
    price: 999, \
    message: function() { \
        console.log(`${this.username}, Welcome to website`); (`1`) \
        console.log(`${user.username}, Welcome to website`); (`2`)\
    } \
}

- In the 1st console.log of message() (method) `this.username` is used to access the value of current context 
- In the 2nd console.log of message() `user.username` is used to access the value of current object.
- We can access the value of current contexe ither `this` or `object_Name` (ex: `user.username`).

- if we do `console.log(this)` in global scope it will print `empty{}` object in `node` enviroment and `window{}` object in browser enviromen. 

- we can use `this` in object, cann't use in `function` .

- in arrow function if we do `console.log(this)` it will give us empty `{}`  object.