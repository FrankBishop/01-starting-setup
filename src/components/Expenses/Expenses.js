import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [year, setYear] = useState("2021");

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  const filteredArray = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={year}
          yearChangeHandler={yearChangeHandler}
        />
        <ExpensesList items= {filteredArray}/>
      </Card>
    </div>
  );
}

export default Expenses;
