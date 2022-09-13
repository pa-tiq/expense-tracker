import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props){

  return (
    <div className='expenses'>
      {props.items.map((ex) => (
        <ExpenseItem title={ex.title} date={ex.date} amount={ex.amount}/>
      ))}
    </div>
  )
}

export default Expenses;