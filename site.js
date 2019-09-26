document.addEventListener("DOMContentLoaded", function(){

  // STORE THE BUTTONS SO THEY CAN BE USED
  const generateBtn = document.querySelector('.generate-btn');
  const resetBtn = document.querySelector('.reset-btn');

  generateBtn.addEventListener('click', function () {
    // PROMPTING FOR NUMBER OF ROWS AND MAKING SURE IT'S A POSITIVE NUMBER
    let rows = window.prompt('How many rows would you like?');
    while (Math.sign(rows) === -1) {
      alert('You must provide a positive number of rows!');
      rows = window.prompt('How many rows would you like?');
    }

    while (isNaN(rows)) {
      alert('You must provide a NUMBER of rows!');
      rows = window.prompt('How many rows would you like?');
      console.log(`rows = ${rows}`);
    }

    // PROMPTING FOR NUMBER OF COLUMNS AND MAKING SURE IT'S A POSITIVE NUMBER
    let columns = window.prompt('How many columns would you like?');
    while (Math.sign(columns) === -1) {
      alert('You must provide a positive number of columns!');
      columns = window.prompt('How many rows would you like?');
    }

    while (isNaN(columns)) {
      alert('You must provide a NUMBER of columns!');
      columns = window.prompt('How many columns would you like?');
      console.log(`columns = ${columns}`);
    }

    // IF NO VALUE IS ADDED TO PROMPT, DEFAULT TO VALUE OF '12'
    if (rows === '') {rows = 12;}
    if (columns === '') {columns = 12;}

    // AND THE TABLE ELEMENT TO THE PAGE SO IT CAN BE POPULATED
    const body = document.querySelector('body');
    const table = document.createElement('table');

    table.setAttribute('border', 1);
    table.setAttribute('cellpadding', 5);

    body.appendChild(table);

    // BUILD OUT THE ROWS NEEDED FOR THE TABLE AND ADD CELLS TO THEM
    for (let i = 1; i <= rows; i++) {
      const newTableRow = document.createElement('tr');
      table.appendChild(newTableRow);

      // ADD CELLS TO THE ROWS AS EACH ROW IS CREATED BY THE LOOP
      for (let j = 1; j <= columns; j++) {
        const answer = i * j;
        const newTableCell = document.createElement('td');
        newTableCell.textContent = `${i} x ${j} = ${answer}`;

        const rowNumber = i - 1; // DON'T UNDERSTAND WHY THIS IS NECESSARY
        table.children[rowNumber].appendChild(newTableCell);
      }
    }

    // SWITCH THE BUTTONS SO RESET CAN WORK PROPERLY
    generateBtn.classList.add('hide');
    resetBtn.classList.remove('hide');
  });

  // USE THE RESET BUTTON TO CLEAR THE TABLE AND START THE GENERATOR AGAIN
  resetBtn.addEventListener('click', function () {
    const body = document.querySelector('body');
    const table = document.querySelector('table');

    body.removeChild(table);

    resetBtn.classList.add('hide');
    generateBtn.classList.remove('hide');
  });

});
