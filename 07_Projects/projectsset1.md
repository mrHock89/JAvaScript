# Projects Related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code:

## Project 1

```javascript
// We have to select body and all the buttons
// Selecting body
const buttons = document.querySelectorAll('.button');
// console.log(buttons);

// selecting body
const body = document.querySelector('body');
// console.log(body);

// function
buttons.forEach((button) => {
  console.log(button);

  // adding event
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```