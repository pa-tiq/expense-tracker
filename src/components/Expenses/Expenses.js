import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import React, {useEffect, useState} from 'react';


function Expenses(props){

  const [filterYear,setFilterYear] = useState('');
  const [expenses,setExpenses] = useState(props.items);
  const [filteredData,setFilteredData] = useState(props.items);

  useEffect(() => {
    setExpenses(props.items);
  },[props.items]);

  useEffect(() => {
    if(filterYear){
      const filterData =  expenses.filter((ex) => ex.date.getFullYear().toString() === filterYear);
      setFilteredData(filterData);
    }
    else{
      setFilteredData(props.items);
    }
  },[filterYear,expenses]);

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} />
      <ExpensesList items={filteredData}/>
    </Card>
  );
}

export default Expenses;