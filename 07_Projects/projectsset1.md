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

    // using if() || Method 1
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

    // using switch-case() || Method 2
    switch (e.target.id) {
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      default:
        break;
    }
  });
});


```

## Project 2:

```javascript

```