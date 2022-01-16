import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear= {year} yearChangeHandler={yearChangeHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
