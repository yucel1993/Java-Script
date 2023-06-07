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

//  ! Defining form and its variables and adding table

const form=document.querySelector("#form")
const formBtn=document.querySelector("#formBtn")


form.addEventListener("submit",(e)=>{
    e.preventDefault();   //! prevent pagerefresh

// ! Create variable form
const placesInput=document.querySelector(".place").value
const dateInput=document.querySelector(".dateTimeInput").value
const expenseInput=document.querySelector("#expenseInput").value

// ! Affirm if everything is okey or not

if(placesInput =='' || dateInput =='' || expenseInput ==''){
    alert("Please fill in all the fields.")
    return
}

if(isNaN(parseFloat(expenseInput))){
    alert("Expense must be a valid number.")
    return
}

// ! Update netincome and expenseresult
const parsedValueExpense=parseFloat(expenseInput)
overExpense +=parsedValueExpense
expenseResult.textContent=`${overExpense}\$`
netResult.textContent=` ${overIncome-overExpense}\$`


const tbody=document.querySelector(".tbody")

const row=document.createElement("tr")

const numberCell=document.createElement("th")
numberCell.scope="row"
numberCell.textContent=tbody.children.length+1

const dateCell =document.createElement("td")
dateCell.textContent=dateInput

const placeCell =document.createElement("td")
placeCell.textContent=placesInput

const amountCell =document.createElement("td")
amountCell.textContent=expenseInput

const iconCell=document.createElement("td")
const icon=document.createElement("i")
icon.className = "fa-solid fa-trash-can"

// ! Appenthem in to the row
row.appendChild(numberCell)
row.appendChild(dateCell)
row.appendChild(placeCell)
row.appendChild(amountCell)
iconCell.appendChild(icon)
row.appendChild(iconCell)
// ! At the end we append row to the body

tbody.appendChild(row)


const parsedexpenseInput=parseFloat(expenseInput)
overExpense+=parsedexpenseInput
expenseResult.textContent=overExpense
netResult.textContent=overIncome-overExpense




form.reset()

})


