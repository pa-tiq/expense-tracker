import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import React, { useState, useEffect } from "react";

const NewExpense = (props) => {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);
  const [showRemoveExpenseForm, setShowRemoveExpenseForm] = useState(false);

  const addExpenseHandler = (newExpense) => {
    const expense = {
      ...newExpense,
    };
    props.onAddExpense(expense);
  };

  useEffect((props) => {
    props?.onRemoveExpenseActive(showRemoveExpenseForm);
  },[showRemoveExpenseForm]);

  const handleShowNewExpenseForm = () => {
    setShowNewExpenseForm(true);
  };  
  
  const handleShowRemoveExpenseForm = () => {
    showRemoveExpenseForm ? setShowRemoveExpenseForm(false) 
    :setShowRemoveExpenseForm(true);
  };

  const cancelHandler = () => {
    setShowNewExpenseForm(false);
  };

  const hideOrShow = {
    cardHeight: showNewExpenseForm ? "18rem" : "5.7rem",
    buttonNewOpacity: (showNewExpenseForm || showRemoveExpenseForm) ? "0" : "1",
    buttonRemOpacity: showNewExpenseForm ? "0" : "1",
    buttonNewVisibility: (showNewExpenseForm || showRemoveExpenseForm) ? "hidden" : "visible",
    buttonRemVisibility: showNewExpenseForm ? "hidden" : "visible",
    hiddenForm: showNewExpenseForm ? false : true,
    buttonRemTransform: showRemoveExpenseForm ? "translate(-90px,0px)" : "translate(0px,0px)",
  };

  return (
    <div className="new-expense" style={{ height: hideOrShow.cardHeight }}>
      <button
        type="button"
        onClick={handleShowNewExpenseForm}
        style={{
          opacity: hideOrShow.buttonNewOpacity,
          visibility: hideOrShow.buttonNewVisibility,
        }}
      >
        New Expense
      </button>
      <button
        type="button"
        onClick={handleShowRemoveExpenseForm}
        style={{
          opacity: hideOrShow.buttonRemOpacity,
          visibility: hideOrShow.buttonRemVisibility,
          transform: hideOrShow.buttonRemTransform,
        }}
      >
        {showRemoveExpenseForm ? '  Cancel  ' : 'Remove Expense'}
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
