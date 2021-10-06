const addBtn = document.getElementById("btn");
const getMoney = document.getElementById("money-input");
const getText = document.getElementById("text-input");
const incomeTotal = document.getElementById("income");
const expenseTotal = document.getElementById("expense");
const incomeList = document.getElementById("item-green");
const expenseList = document.getElementById("item-red");
const balance = document.getElementById("balance");
const list = document.getElementById("list");

const dummyTransactions = [
  { id: 1, text: "rice", amount: -500 },
  { id: 2, text: "cash", amount: +600 },
  { id: 2, text: "data", amount: -1000 },
  { id: 2, text: "giveaway", amount: +3000 },
];

let transactions = dummyTransactions;

// Add transaction to DOM list
function addTransactionDom(transactions) {
  // setting up the sign convention
  const sign = transactions.amount > 0 ? "+" : "-";
  const item = document.createElement("li");

  //   setting up the class name
  item.classList.add(transactions.amount > 0 ? "item-green" : "item-red");

  item.innerHTML = `${transactions.text} <span>${sign}₦${Math.abs(
    transactions.amount
  )}</span><button class="btn-del" id="btn-del">x</button>`;

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((transaction) => {
    return transaction.amount;
  });
  console.log(amounts);

  const total = amounts.reduce((acc, item) => (acc += item)).toFixed(2);
  console.log("total money is: ", total);

  const incomeArr = amounts.filter((amount) => amount > 0);
  const expenseArr = amounts.filter((amount) => amount < 0);

  const incomed = incomeArr.reduce((acc, item) => (acc += item)).toFixed(2);
  const expensed = expenseArr.reduce((acc, item) => (acc += item)).toFixed(2);
  console.log(incomed);
  console.log(expensed);

  balance.innerText = total;
  income.innerText = incomed;
  expense.innerText = expensed;
}

updateValues();

// init app
function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDom);
}

init();
