import React, {useState} from 'react'

const TransactionForm = ({addTransaction}) => {
    // I used the useState to initilize formData with an object that holds the state for the form fields (name, amount, date, and type).
    // The setFormData function is used to update this state.
    const [formData, setFormData] = useState({
        name: '',
        amount:0,
        date: '',
        type: 'expense',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({ ...formData, amount: parseFloat(formData.amount), id: Date.now() });
        setFormData({ name: '', amount: 0, date: '', type: 'expense' });
      };

      return (
        <form onSubmit={handleSubmit}>
          {/* Transaction Type */}
          <div>
            <label>
              <input
                type="checkbox"
                checked={formData.type === 'income'}
                onChange={() => setFormData({ ...formData, type: formData.type === 'income' ? 'expense' : 'income' })}
              />
              <div className="option">
                <span>Expense</span>
                <span>Income</span>
              </div>
            </label>
          </div>
    
          {/* Name, Amount, Date */}
          <div>
            <label>Note</label>
            <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div>
            <label>Amount</label>
            <input type="number" required min="0.01" step="0.01" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
          </div>
          <div>
            <label>Date</label>
            <input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
          </div>
          <button type="submit">Submit</button>
        </form>
      );
    
      // In generel This component is used to handle the input the user will add. 
};

export default TransactionForm