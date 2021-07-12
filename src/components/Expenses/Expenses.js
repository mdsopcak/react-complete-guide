import React, { useState } from 'react';

import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState("2020");

  const yearChangeHandler = (yearChosen) => {
    setSelectedYear(yearChosen);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(selectedYear)
  });

  return (
      <Card className='expenses'>
        <ExpensesFilter selected={selectedYear} onYearChange={yearChangeHandler}/>
        <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
