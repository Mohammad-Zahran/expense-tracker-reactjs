import React, { useState, useEffect } from 'react';
import './App.css';
import BudgetSummary from './components/BudgetSummary';
import TransactionForm from './components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("transactions")) || []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <BudgetSummary transactions={transactions} />
    </div>
  )
}

export default App;
