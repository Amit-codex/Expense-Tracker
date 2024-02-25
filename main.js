// Expense Data store
let expenses = [];  

// DOM Element to manipulate the form 
const expenseForm = document.getElementById('expense-form');
const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');
const categoryInput = document.getElementById('category');
const expenseList = document.getElementById('expense-list');
const totalExpense = document.getElementById('total-expenses');
const clearButton = document.getElementById('clear');

//Function
function addExpense(amount, description,category){
    const expense = {
        amount: parseFloat(amount),
        description,category
    };

    expense.push(expense);
    updateUI();
    saveToLocalStorage();
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    updateUI();
    saveToLocalStorage();
}

function updateUI(){
    expenseList.innerHTML = '';
    let total = 0;

    expenses.forEach(expense =>{
        const li = document.createElement('li');
        li.innerHTML = `₹${expense.amount.toFixed(2)} - ${expense.description} (${expense.category})
        <button onclick="deleteExpense(${expense.id})">Delete</button>
    `;
    expenseList.appendChild(li);
    total += expense.amount;
    });

    totalExpense.textContent = '₹${total.toFixed(2)}';
}