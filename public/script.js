let expenses = []
let totalamt = 0;
const categorySelect = document.getElementById("category_select")
const amountinput = document.getElementById("amount_input")
const information = document.getElementById("info")
const dateinput = document.getElementById("date_input")
const Addbutton = document.getElementById("add_btn")
const expenseTablebody = document.getElementById("expense-table-body")
const Totalamount = document.getElementById("total_amount")

Addbutton.addEventListener('click', function(){
    const category=categorySelect.value;
    const info=information.value;
    const amount = Number(amountinput.value);
    const date=dateinput.value;

    if (category=="") {
        alert("Please select a Category");
        return;
    }
    if (info=="") {
        alert("Please enter the Information");
        return;
    }
    if (isNaN(amount) || amount<=0) {
        alert("Please enter the valid Amount");
        return;
    }
    if (date=="") {
        alert("Please select a date");
        return;
    }

    expenses.push({category, amount, info, date}) 
    if (category==='Income') {
        totalamt+=amount;
    }
    else {
        totalamt-=amount;
    }

    Totalamount.textContent = totalamt;

    const newRow = expenseTablebody.insertRow();

    const categoryCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const delebtn = document.createElement('button');
    delebtn.textContent="Delete";
    delebtn.classList.add('dlt-btn');
    delebtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense), 1);

        if (category==='Income') {
            totalamt-=amount;
        }
        else {
            totalamt+=amount;
        }
        Totalamount.textContent = totalamt;
        expenseTablebody.removeChild(newRow) 
    })
   const expense = expenses[expenses.length-1];
   categoryCell.textContent=expense.category;
   infoCell.textContent=expense.info;
   dateCell.textContent=expense.date;
   amountCell.textContent=expense.amount;
   deleteCell.appendChild(delebtn);
});
for (const expense of expenses) {
    if (category='Income') {
        totalamt+=amount;
    }
    else {
        totalamt-=amount;
    }

    Totalamount.textContent = totalamt;

    const newRow = expenseTablebody.insertRow();

    const categoryCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const delebtn = document.createElement('button');
    delebtn.textContent="Delete";
    delebtn.classList.add('dlt-btn');
    delebtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense), 1);

        if (category='Income') {
            totalamt-=amount;
        }
        else {
            totalamt+=amount;
        }
        Totalamount.textContent = totalamt;
        expenseTablebody.removeChild(newRow) 
    })
   const expense = expenses[expenses.length-1];
   categoryCell.textContent=expense.category;
   infoCell.textContent=expense.info;
   dateCell.textContent=expense.date;
   amountCell.textContent=expense.amount;
   deleteCell.appendChild(delebtn);


}