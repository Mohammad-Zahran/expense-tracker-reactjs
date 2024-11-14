import React from 'react'

const BudgetSummary = ({transactions}) => {
    // I used filter to filter out the type of transaction
    // reduce will iterate over the filtered array and sums up the amount of each transaction, starting from an initial value of 0.
    const incomeTotal = transactions
         .filter(trx => trx.type === 'income')
         .reduce((total, trx) => total + trx.amount, 0);

         const expenseTotal = transactions
         .filter(trx => trx.type === 'expense')
         .reduce((total, trx) => total + trx.amount, 0);

    const balanceTotal = incomeTotal - expenseTotal;

    // In here I am rendering the component by viewing the entire summary of the expense tracker
    // from expense to income to balance the user have.
    return (
        <aside className="sidebar">
          <header>
            <div id="bs">Budget Summary</div>
            <div className="budget-content">
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
                <span className={balanceTotal < 0 ? 'negative' : ''}>{balanceTotal.toFixed(2)}</span>
              </div>
            </div>
          </header>
        </aside>
      );
    };

export default BudgetSummary