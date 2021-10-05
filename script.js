const addBtn = document.getElementById("btn");
const getMoney = document.getElementById("money-input");
const getText = document.getElementById("text-input");
const incomeTotal = document.getElementById("income");
const expenseTotal = document.getElementById("expense");
const incomeList = document.getElementById("list-green");
const expenseList = document.getElementById("list-red");

const dummyTransactions = [
  { id: 1, text: "rice", amount: -500 },
  { id: 2, text: "cash", amount: +300 },
  { id: 2, text: "data", amount: -1000 },
  { id: 2, text: "giveaway", amount: +3000 },
];
let transactions = dummyTransactions;

// Add transaction to DOM list
function addTransactionDom(transactions) {
  const sign = transactions.amount > 0 ? "+" : "-";

  //   const item =
}
