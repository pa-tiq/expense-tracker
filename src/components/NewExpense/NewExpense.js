import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';
import React, {useState} from 'react';

const NewExpense = (props) => {

  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  const addExpenseHandler = (newExpense) => {
    const expense = {
      ...newExpense,
    }
    props.onAddExpense(expense);
  }

  const handleShowNewExpenseForm = () => {
    setShowNewExpenseForm(true);
  }

  const cancelHandler = () => {
    setShowNewExpenseForm(false);
  }

  return (
    <div className="new-expense">
      {!showNewExpenseForm &&
        <button type="button" onClick={handleShowNewExpenseForm}>New Expense</button>
      }      
      {showNewExpenseForm && 
        <NewExpenseForm onAddExpense={addExpenseHandler} onCancel={cancelHandler}/>
      }
    </div>
  );
}

export default NewExpense;