import React from 'react'

const TransactionList = ({transactions, deleteTransaction}) => {
    return (
        <ul id="transactionList">
          {transactions.length === 0 ? (
            <div id="status">No transactions.</div>
          ) : (
            transactions.map(({ id, name, amount, date, type }) => (
              <li key={id}>
                <div className="name">
                  <h4>{name}</h4>
                  <p>{new Date(date).toLocaleDateString()}</p>
                </div>
                <div className={`amount ${type}`}>
                  <span>{(type === 'income' ? '+' : '-') + amount.toFixed(2)}</span>
                </div>
                <div className="action" onClick={() => deleteTransaction(id)}>
                  <span>&times;</span>
                </div>
              </li>
            ))
          )}
        </ul>
      );
    };

export default TransactionList