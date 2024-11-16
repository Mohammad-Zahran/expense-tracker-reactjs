import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import './App.css';
import BudgetSummary from './components/BudgetSummary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import FilterForm from './components/FilterForm';
import Login from './components/Auth/Login';

function App() {
  const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("transactions")) || []);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(trx => trx.id !== id));
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
  };

  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />

          <Route
            path="/"
            element={isLoggedIn ? (
              <>
                <h1>Expense Tracker</h1>
                <BudgetSummary transactions={transactions} />
                <div className="content-wrapper">
                  <TransactionForm addTransaction={addTransaction} />
                  <TransactionList transactions={filteredTransactions.length ? filteredTransactions : transactions} deleteTransaction={deleteTransaction} />
                </div>
                <FilterForm transactions={transactions} setFilteredTransactions={setFilteredTransactions} />
              </>
            ) : (
              <Navigate to="/login" /> // Redirect to login if not logged in
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
