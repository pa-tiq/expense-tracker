import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from 'react';

const today = new Date();
const initialExpenseData = [
  {
    date: today,
    title: 'Title1',
    amount: 1000.00,
  },    
  {
    date: today,
    title: 'Title2',
    amount: 2000.00,
  },  
  {
    date: today,
    title: 'Title3',
    amount: 3000.00,
  },    
  {
    date: today,
    title: 'Title4',
    amount: 4000.00,
  }
];

function App() {

  const [expenseData,setExpenseData] = useState(initialExpenseData);  

  const addExpenseHandler = (newExpense) => {
    setExpenseData((prevExpenses) => {
      return [newExpense,...prevExpenses];
    });
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenseData}/>
    </div>
  );
}

export default App;