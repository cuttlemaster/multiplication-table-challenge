document.addEventListener("DOMContentLoaded", function(){

  // STORE THE BUTTON IN A VARIABLE TO BE USED
  const button = document.querySelector('button');

  // WHEN THE BUTTON IS CLICKED, STORE NUMBER OF ROWS AND COLUMNS
  button.addEventListener('click', function () {
    let rows = window.prompt('How many rows would you like?');
    let columns = window.prompt('How many columns would you like?');

    // IF NO VALUE IS ADDED TO PROMPT, DEFAULT TO VALUE OF '12'
    if (rows === '') {rows = 12;}
    if (columns === '') {columns = 12;}

    alert(`rows = ${rows} : columns = ${columns}`);
  });

});
