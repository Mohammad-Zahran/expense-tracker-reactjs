import React, { useState, useEffect } from 'react';
import './App.css';
import BudgetSummary from './components/BudgetSummary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("transactions")) || []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);


  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(trx => trx.id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <BudgetSummary transactions={transactions} />
      <div className="content-wrapper">
        <TransactionForm addTransaction={addTransaction} />
        
      </div>
    </div>
    
  )
}

export default App;
