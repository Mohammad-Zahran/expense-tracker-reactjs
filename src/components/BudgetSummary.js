const BudgetSummary = ({ transactions }) => {
  const username = localStorage.getItem('username');  

  const incomeTotal = transactions
    .filter(trx => trx.type === 'income')
    .reduce((total, trx) => total + trx.amount, 0);

  const expenseTotal = transactions
    .filter(trx => trx.type === 'expense')
    .reduce((total, trx) => total + trx.amount, 0);

  const balanceTotal = incomeTotal - expenseTotal;

  return (
    <aside className="sidebar">
      <header>
        <div id="bs">Budget Summary</div>
        <div className="budget-content">
          
          {username && <div className="welcome-message">Welcome, {username}!</div>}

          <div>
            <h5>Income</h5>
            <span>{incomeTotal.toFixed(2)}</span>
          </div>
          <div>
            <h5>Expense</h5>
            <span>{expenseTotal.toFixed(2)}</span>
          </div>
          <div>
            <h5>Balance</h5>
            <span className={balanceTotal < 0 ? 'negative' : ''}>
              {balanceTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </header>
    </aside>
  );
};

export default BudgetSummary;
