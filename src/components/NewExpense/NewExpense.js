import "./NewExpense.css";
import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formOpen, setFormStatus] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormStatus(false);
  };

  const openForm = () => {
    setFormStatus(true);
  };

  const closeForm = () => {
    setFormStatus(false);
  };

  return (
    <div className="new-expense">
      {!formOpen && <button onClick={openForm}>
        Add New Expense
      </button>}
      {formOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm={closeForm} />}
    </div>
  );
};

export default NewExpense;
