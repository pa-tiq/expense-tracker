import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter";
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
      const filterData =  expenses.filter((ex) => ex.date.getFullYear().toString() == filterYear);
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
    <Card className='expenses'>
      <ExpensesFilter onFilterChange={filterChangeHandler}/>
      {filteredData.map((ex) => (
        <ExpenseItem id={ex.id} title={ex.title} date={ex.date} amount={ex.amount}/>
      ))}
    </Card>
  )
}

export default Expenses;