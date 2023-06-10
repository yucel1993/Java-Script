// ! First income variable


const incomeInput=document.querySelector(".inputIncome")
const incomeBtn=document.querySelector("#button-addon2")

// ! Result list assign

const incomeResult=document.querySelector(".income")
const expenseResult=document.querySelector(".expense")
const netResult=document.querySelector(".net")

let overIncome=0;
let overExpense=0;

// ! first adding event

incomeBtn.addEventListener("click",()=>{
    const value=incomeInput.value.trim()
    if(value=='' || isNaN(parseFloat(value))){
        alert("Enter the number")
        return
    }

    const parsedValue=parseFloat(value)
    overIncome +=parsedValue
    incomeResult.textContent=`${overIncome}\$`
    netResult.textContent=`${overIncome}\$`
})

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
  


    //? Update expense
    const expenseValue = parseFloat(expenseInput);
    overExpense += expenseValue;
    expenseResult.textContent = overExpense;
    netResult.textContent = `${overIncome - overExpense}\$`;
  
  


  // Reset the form
  form.reset();
});



tbody.addEventListener("click",(e)=>{
if(e.target.classList.contains("fa-trash-can")){
    

    const row=e.target.closest("tr")
    const amount =parseFloat(row.querySelector('td:nth-child(4)').textContent)
    const currentIncome=parseFloat(incomeResult.textContent)
    const currentExpense=parseFloat(expenseResult.textContent)
    
    incomeResult.textContent=`${currentIncome-amount}\$`
    expenseResult.textContent=`${currentExpense-amount}\$`
    netResult.textContent=`${parseFloat(incomeResult.textContent)-parseFloat(expenseResult.textContent)}\$`
    row.remove()
}
})



const refreshBtn=document.querySelector(".btn-warning")

  refreshBtn.addEventListener("click",()=>{
    location.reload()
  })