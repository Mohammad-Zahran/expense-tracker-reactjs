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
    

}

export default TransactionForm