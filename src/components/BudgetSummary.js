import React from 'react'

const BudgetSummary = ({transactions}) => {
    const incomeTotal = transactions
         .filter(trx => trx.type === 'income')
         .reduce((total, trx) => total + trx.amount, 0);

         const expenseTotal = transactions
         .filter(trx => trx.type === 'expense')
         .reduce((total, trx) => total + trx.amount, 0);

    const balanceTotal = incomeTotal - expenseTotal;
    

}

export default BudgetSummary