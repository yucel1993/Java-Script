// 
const inputIncome = document.querySelector(".inputIncome");
const btnIncome = document.querySelector(".btnIncome");
const incomeResult = document.querySelector(".income");
const expenseResult = document.querySelector(".expense");
const netResult = document.querySelector(".net");



let totalIncome = 0;
let totalExpense = 0;




//! Add event listener to the button for income calcualtion 

btnIncome.addEventListener("click", () => {
    const value = inputIncome.value.trim(); //! Remove leading/trailing whitespace
    if (value === '' || isNaN(parseFloat(value))) {
        alert('Please enter a valid number for income.');
        return; //! Stop execution if input is empty or not a number
    }
    
    const parsedValue = parseFloat(value);
    totalIncome += parsedValue;
    incomeResult.textContent = totalIncome;
    netResult.textContent = totalIncome - totalExpense;
    inputIncome.value = "";
});




//? Add event listener to the form in order to calculate the net income,date and expense


const form = document.querySelector('#form');
const formBtn = document.querySelector('#formBtn');
const tbody = document.querySelector('.tbody');


form.addEventListener('submit', (e) => {
  e.preventDefault();   //! Prevent page refresh when form is submitted  

//   ! Create variables from the form inside of the event listener

  const placesInput = document.querySelector('#placesInput').value;
  const dateTimeInput = document.querySelector('#dateTimeInput').value;
  const expenseInput = document.querySelector('#expenseInput').value;

  //! Validation checks after submission

  if (placesInput.trim() === '' || dateTimeInput.trim() === '' || expenseInput.trim() === '') {
    alert('Please fill in all the fields.');
    return; //! Stop execution if any field is empty
  }

  if (isNaN(parseFloat(expenseInput))) {
    alert('Expense must be a valid number.');
    return; //* Stop execution if expense is not a number
  }

  //? Update expense
  const expenseValue = parseFloat(expenseInput);
  totalExpense += expenseValue;
  expenseResult.textContent = totalExpense;
  netResult.textContent = totalIncome - totalExpense;





    //   ? Create a new table row

    const newRow = document.createElement('tr');

    //? Create table cells for each column

    const numberCell = document.createElement('th');
    numberCell.scope = 'row';
    numberCell.textContent = tbody.children.length + 1;
  
    const dateCell = document.createElement('td');
    dateCell.textContent = dateTimeInput;
  
    const placeCell = document.createElement('td');
    placeCell.textContent = placesInput;
  
    const amountCell = document.createElement('td');
    amountCell.textContent = expenseInput;
  
    const removeCell = document.createElement('td');
    const trashIcon = document.createElement('i');
    trashIcon.className = 'fa-solid fa-trash-can';
  
    // Append cells to the row
    newRow.appendChild(numberCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(placeCell);
    newRow.appendChild(amountCell);
    removeCell.appendChild(trashIcon);
    newRow.appendChild(removeCell);
  
    // Append the new row to the table body
    tbody.appendChild(newRow);
  

  // Reset the form
  form.reset();
});



// Event delegation - Listen for click events on the table body
tbody.addEventListener('click', (e) => {
    // Check if the clicked element is a trash bin icon
    if (e.target.classList.contains('fa-trash-can')) {
      // Get the parent row of the clicked trash bin icon
      const row = e.target.closest('tr');
  
      // Calculate the amount to subtract from the result values
      const amount = parseFloat(row.querySelector('td:nth-child(4)').textContent);
      const currentIncome = parseFloat(incomeResult.textContent);
      const currentExpense = parseFloat(expenseResult.textContent);
  
      // Update the result values by subtracting the amount
      incomeResult.textContent = currentIncome - amount;
      expenseResult.textContent = currentExpense - amount;
      netResult.textContent = parseFloat(incomeResult.textContent) - parseFloat(expenseResult.textContent);
  
      // Remove the row from the table body
      row.remove();
    }
  });





//   !Refresh Button

  const refreshButton = document.querySelector('.btn-warning');

  refreshButton.addEventListener('click', () => {
    location.reload();
  });
  