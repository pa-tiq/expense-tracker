import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import React, { useEffect, useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");
  const [expenses, setExpenses] = useState(props.items);
  const [filteredData, setFilteredData] = useState(props.items);

  useEffect(() => {
    setExpenses(props.items);
  }, [props.items]);

  useEffect(() => {
    if (filterYear) {
      const filterData = expenses.filter(
        (ex) => ex.date.getFullYear().toString() === filterYear
      );
      setFilteredData(filterData);
    } else {
      setFilteredData(expenses);
    }
  }, [filterYear, expenses]);

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }; 
  const removeExpenseHandler = (expense) => {
    const removeExpense = expenses.filter(
      (ex) => ex.id !== +expense.target.id
    );
    setExpenses(removeExpense);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} />
      <ExpensesChart expenses={filteredData} />
      <ExpensesList
        items={filteredData}
        removeExpenseActive={props.removeExpenseActive}
        removeExpenseHandler={removeExpenseHandler}
      />
    </Card>
  );
}

export default Expenses;
