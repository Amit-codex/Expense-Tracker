// Expense Data store
let expense = [];  

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