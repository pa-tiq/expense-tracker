import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from 'react';

function App() {

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

  const [expenseData,setExpenseData] = useState(initialExpenseData);  

  const addExpenseHandler = (expense) => {
    console.log('in app.js',expense);
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} id={expenseData.length}/>
      <Expenses items={expenseData}/>
    </div>
  );
}

export default App;