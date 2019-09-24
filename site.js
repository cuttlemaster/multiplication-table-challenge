document.addEventListener("DOMContentLoaded", function(){

  // STORE THE BUTTON IN A VARIABLE TO BE USED
  const button = document.querySelector('button');

  // WHEN THE BUTTON IS CLICKED ASK THE USER FOR NUMBER OF ROWS AND COLUMNS
  // IF THE NUMBER PROVIDED IS A NEGATIVE NUMBER ASK FOR A POSITIVE NUMBER
  // AND THEN RE-PROMPT THE USER FOR A NUMBER ANOTHER TIME
  button.addEventListener('click', function () {

    // PROMPTING FOR NUMBER OF ROWS AND MAKING SURE IT'S A POSITIVE NUMBER
    let rows = window.prompt('How many rows would you like?');
    if (Math.sign(rows) === -1) {
      alert('You must provide a positive number of rows!');
      rows = window.prompt('How many rows would you like?');
    }

    // PROMPTING FOR NUMBER OF COLUMNS AND MAKING SURE IT'S A POSITIVE NUMBER
    let columns = window.prompt('How many columns would you like?');
    if (Math.sign(columns) === -1) {
      alert('You must provide a positive number of columns!');
      columns = window.prompt('How many rows would you like?');
    }

    // IF NO VALUE IS ADDED TO PROMPT, DEFAULT TO VALUE OF '12'
    if (rows === '') {rows = 12;}
    if (columns === '') {columns = 12;}

    alert(`rows = ${rows} : columns = ${columns}`);
  });

});
