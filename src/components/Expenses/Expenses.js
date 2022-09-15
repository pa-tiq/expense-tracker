import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter";
import React, {useEffect, useState} from 'react';


function Expenses(props){

  const [filterYear,setFilterYear] = useState('2022');
  const [filteredData,setFilteredData] = useState(props.items);

  useEffect(() => {
    if(filterYear){
      const filterData =  props.items.filter((ex) => ex.date.getFullYear().toString() == filterYear);
      setFilteredData(filterData);
    }
    else{
      setFilteredData(props.items);
    }
  },[filterYear]);

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterChange={filterChangeHandler}/>
      {filteredData.map((ex,idx) => (
        <ExpenseItem id={idx} title={ex.title} date={ex.date} amount={ex.amount}/>
      ))}
    </Card>
  )
}

export default Expenses;