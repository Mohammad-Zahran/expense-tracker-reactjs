import React from 'react'

const FilterForm = () => {
    // I used the useState to initilize filters with an object that holds the state for the form fields inside the code.
    // The setFilters function is used to update this state.
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
    }

export default FilterForm