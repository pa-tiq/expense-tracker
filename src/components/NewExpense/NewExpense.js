import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {

  const addExpenseHandler = (newExpense) => {
    const expense = {
      ...newExpense,
    }
    props.onAddExpense(expense);
  }

  return (
    <div className='new-expense'>
      <NewExpenseForm onAddExpense={addExpenseHandler}/>
    </div>
  )
}

export default NewExpense;