import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from 'react';

const today = new Date();
const initialExpenseData = [
  {
    title: 'Title1',
    amount: 1000.50,
    date: today,    
  },    
  {
    title: 'Title2',
    amount: 2000.00,
    date: today,  
  },  
  {
    title: 'Title3',
    amount: 3000.00,
    date: today,  
  },    
  {
    title: 'Title4',
    amount: 4000.00,
    date: today,  
  }
];

initialExpenseData.map((exp,id) => {
  exp.id = id;
})

function App() {

  const [expenseData,setExpenseData] = useState(initialExpenseData);
  const [removeExpenseActive,setRemoveExpenseActive] = useState(false);

  const addExpenseHandler = (newExpense) => {
    setExpenseData((prevExpenses) => {
      newExpense.id = prevExpenses.length;
      return [newExpense,...prevExpenses];
    });
  }

  const removeExpenseHandler = (expense) => {
    const removeExpense = expenseData.filter(
      (ex) => ex.id !== +expense.target.id
    );
    setExpenseData(removeExpense);
  };
  
  const removeExpenseButtonActiveHandler = (isActive) => {
    setRemoveExpenseActive(isActive);
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} onRemoveExpenseActive={removeExpenseButtonActiveHandler}/>
      <Expenses items={expenseData} removeExpenseActive={removeExpenseActive} removeExpenseHandler={removeExpenseHandler}/>
    </div>
  );
}

export default App;