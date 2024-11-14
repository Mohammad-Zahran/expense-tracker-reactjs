import React, { useState } from 'react';

const FilterForm = ({ transactions, setFilteredTransactions }) => {
  const [filters, setFilters] = useState({
    minAmount: '',
    maxAmount: '',
    type: '',
    date: '',
    note: '',
  });

  const applyFilter = (e) => {
    e.preventDefault();
    setFilteredTransactions(
      transactions.filter((trx) => {
        const matchesAmount = trx.amount >= (parseFloat(filters.minAmount) || 0) && trx.amount <= (parseFloat(filters.maxAmount) || Infinity);
        const matchesType = filters.type ? trx.type === filters.type : true;
        const matchesDate = filters.date ? new Date(trx.date).toDateString() === new Date(filters.date).toDateString() : true;
        const matchesNote = trx.name.toLowerCase().includes(filters.note.toLowerCase());
        return matchesAmount && matchesType && matchesDate && matchesNote;
      })
    );
  };

  return (
    <form onSubmit={applyFilter}>
      <input type="number" placeholder="Min Amount" onChange={(e) => setFilters({ ...filters, minAmount: e.target.value })} />
      <input type="number" placeholder="Max Amount" onChange={(e) => setFilters({ ...filters, maxAmount: e.target.value })} />
      <select onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
        <option value="">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="date" onChange={(e) => setFilters({ ...filters, date: e.target.value })} />
      <input type="text" placeholder="Note" onChange={(e) => setFilters({ ...filters, note: e.target.value })} />
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterForm;
