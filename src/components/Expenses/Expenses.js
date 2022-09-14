import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props){

  return (
    <Card className='expenses'>
      {props.items.map((ex,idx) => (
        <ExpenseItem idx={idx} title={ex.title} date={ex.date} amount={ex.amount}/>
      ))}
    </Card>
  )
}

export default Expenses;