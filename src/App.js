import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { Fragment, useState } from "react";

const today = new Date();
let initialExpenseData = [
  {
    id:1,
    title: "Title1",
    amount: 1000.5,
    date: today,
  },
  {
    id:2,
    title: "Title2",
    amount: 2000.0,
    date: today,
  },
  {
    id:3,
    title: "Title3",
    amount: 3000.0,
    date: today,
  },
  {
    id:4,
    title: "Title4",
    amount: 4000.0,
    date: today,
  },
];

function App() {
  const [expenseData, setExpenseData] = useState(initialExpenseData);
  const [removeExpenseActive, setRemoveExpenseActive] = useState(false);

  const addExpenseHandler = (newExpense) => {
    setExpenseData((prevExpenses) => {
      let biggestId = 0;
      prevExpenses.forEach((ex) => {
        if(ex.id > biggestId) biggestId = ex.id;
      })
      newExpense.id = ++biggestId;
      return [newExpense, ...prevExpenses];
    });
  };

  const removeExpenseHandler = (expense) => {
    const removeExpense = expenseData.filter(
      (ex) => ex.id !== +expense.target.id
    );
    setExpenseData(removeExpense);
  };

  const removeExpenseButtonActiveHandler = (isActive) => {
    setRemoveExpenseActive(isActive);
  };

  return (
    <Fragment>
      <NewExpense
        onAddExpense={addExpenseHandler}
        onRemoveExpenseActive={removeExpenseButtonActiveHandler}
      />
      <Expenses
        items={expenseData}
        removeExpenseActive={removeExpenseActive}
        removeExpenseHandler={removeExpenseHandler}
      />
    </Fragment>
  );
}

export default App;
