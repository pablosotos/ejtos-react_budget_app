import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import CurrencyDropdown from './CurrencyDropdown';

const Budget = () => {
  const { budget, expenses, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('£');

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  const updateBudget = () => {
    const parsedBudget = parseInt(newBudget);
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (parsedBudget < totalExpenses) {
      alert('You cannot reduce the budget value lower than the spending');
      return;
    }

    if (!isNaN(parsedBudget) && parsedBudget >= 0 && parsedBudget <= 20000) {
      dispatch({ type: 'SET_BUDGET', payload: parsedBudget });
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {selectedCurrency}</span>
      <input
        type='number'
        value={newBudget}
        onChange={handleBudgetChange}
        step={10}
        max={20000}
      />
      <button onClick={updateBudget}>Update</button>
    </div>
  );
};

export default Budget;
