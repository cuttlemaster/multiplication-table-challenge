document.addEventListener("DOMContentLoaded", function(){

  // STORE THE BUTTON IN A VARIABLE TO BE USED
  const button = document.querySelector('button');

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

    // AND THE TABLE ELEMENT TO THE PAGE SO IT CAN BE POPULATED
    const body = document.querySelector('body');
    const table = document.createElement('table');
    body.appendChild(table);

    // BUILD OUT THE ROWS NEEDED FOR THE TABLE AND ADD CELLS TO THEM
    for (let i = 0; i < rows; i++) {
      const newTableRow = document.createElement('tr');
      table.appendChild(newTableRow);

      // ADD CELLS TO THE ROWS AS EACH ROW IS CREATED BY THE LOOP
      for (let j = 0; j < columns; j++) {
        const newTableCell = document.createElement('td');
        table.children[i].appendChild(newTableCell);
      }
    }
  });

});
