import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  const addExpenseHandler = (newExpense) => {
    const expense = {
      ...newExpense,
    };
    props.onAddExpense(expense);
  };

  const handleShowNewExpenseForm = () => {
    setShowNewExpenseForm(true);
  };

  const cancelHandler = () => {
    setShowNewExpenseForm(false);
  };

  const hideOrShow = {
    cardHeight: showNewExpenseForm ? "18rem" : "5.7rem",
    buttonOpacity: showNewExpenseForm ? "0" : "1",
    buttonVisibility: showNewExpenseForm ? "hidden" : "visible",
    hiddenForm: showNewExpenseForm ? false : true,
  };

  return (
    <div className="new-expense" style={{ height: hideOrShow.cardHeight }}>
      <button
        type="button"
        onClick={handleShowNewExpenseForm}
        style={{
          opacity: hideOrShow.buttonOpacity,
          visibility: hideOrShow.buttonVisibility,
        }}
      >
        New Expense
      </button>
      <NewExpenseForm
        onAddExpense={addExpenseHandler}
        onCancel={cancelHandler}
        hidden={hideOrShow.hiddenForm}
      />
    </div>
  );
};

export default NewExpense;
