const addBtn = document.getElementById("form");
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
  { id: 2, text: "cash", amount: 600 },
  { id: 2, text: "data", amount: -1000 },
  { id: 2, text: "giveaway", amount: 3000 },
];

let transactions = dummyTransactions;
// FUNTION DEFINITIONS
// Add transaction to DOM list
function addTransaction(e) {
  e.preventDefault();
  if (getText.value.trim() === "" || getMoney.value === "") {
    alert("Please fill in the input fields");
  } else {
    const transaction = {
      id: generateID(),
      text: getText.value,
      amount: +getMoney.value,
    };

    transactions.push(transaction);
    addTransactionDom(transaction);
    updateValues();

    getText.value = "";
    getMoney.value = "";
    console.log(transactions);
  }
}

function generateID() {
  return Math.floor(Math.random() * 100000);
}
// function removeTransaction(transactions.id) {
//   return
// }
function addTransactionDom(transactions) {
  // setting up the sign convention
  const sign = transactions.amount > 0 ? "+" : "-";
  const item = document.createElement("li");

  //   setting up the class name
  item.classList.add(transactions.amount > 0 ? "item-green" : "item-red");

  item.innerHTML = `${transactions.text} <span>${sign}₦${Math.abs(
    transactions.amount
  )}</span><button class="btn-del" id="btn-del" onClick="removeTransaction(${
    transactions.id
  })">x</button>`;

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((transaction) => {
    return transaction.amount;
  });
  console.log(amounts);

  const total = amounts.reduce((acc, item) => (acc += item)).toFixed(2);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item))
    .toFixed(2);

  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => (acc += item))
      .toFixed(2) * -1;

  balance.innerText = `₦${total}`;
  incomeTotal.innerText = `₦${income}`;
  expenseTotal.innerText = `₦${expense}`;
}

updateValues();

// init app
function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDom);
}

init();

// Event Listeners
addBtn.addEventListener("submit", addTransaction);
