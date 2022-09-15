import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

  if (props.items.length === 0){
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  let expensesContent = 
    props.items.map((ex) => (
        <ExpenseItem
          key={ex.id}
          id={ex.id}
          title={ex.title}
          date={ex.date}
          amount={ex.amount}
        />
      ));

  return (
    <ul className="expenses-list">
      {expensesContent}
    </ul>
  )
}

export default ExpensesList;