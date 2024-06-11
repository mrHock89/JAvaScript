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
// select form and store in a variable
// have to stop form default action
// select height and weight in int and store in a variable
// we have to call values in event else we will get empty value
// select result

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    function summary(bmi) {
      if (bmi < 18.6) {
        return 'Under Weight';
      } else if (bmi > 18.6 && bmi < 24.9) {
        return 'Normal Range';
      } else if (bmi > 24.9) {
        return 'Overweight';
      }
    }
    const bmiSummary = summary(bmi);
    results.innerHTML = `<span>${bmi}</span><br /><span>${bmiSummary}</span>`;
  }
});


```