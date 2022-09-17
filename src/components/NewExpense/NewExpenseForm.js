import "./NewExpense.css";
import React from "react";

const NewExpenseForm = (props) => {
  const useState = React.useState;

  //const [userInput, setUserInput] = useState({
  //  enteredTitle: '',
  //  enteredAmount: '',
  //  enteredDate: '',
  //})
  //const titleChangeHandler = (e) => {
  //  setUserInput((prevState) => {
  //    return{...prevState, enteredTitle: e.target.value}
  //  });
  //}
  //const amountChangeHandler = (e) => {
  //  setUserInput((prevState) => {
  //    return{...prevState, enteredAmount: e.target.value}
  //  });
  //}
  //const dateChangeHandler = (e) => {
  //  setUserInput((prevState) => {
  //    return{...prevState, enteredDate: e.target.value}
  //  });
  //}

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredData = {
      title: title,
      amount: parseFloat(amount),
      date: new Date(date),
    };
    props.onAddExpense(enteredData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const cancelHandler = () => {
    setTitle("");
    setAmount("");
    setDate("");
    props.onCancel();
  };

  const hideOrShow = {
    opacity: props.hidden ? "0" : "1",
    position: props.hidden ? "static" : "static",
    visibility: props.hidden ? "hidden" : "visible",
    translate: props.hidden? "translate(0px,0px)" : "translate(0px,-67px)",

  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className="new-expense__controls"
        style={{
          opacity: hideOrShow.opacity,
          visibility: hideOrShow.visibility,
          transform: hideOrShow.translate,
        }}
      >
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" maxLength='32' onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.00"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div
        className="new-expense__actions"
        style={{
          opacity: hideOrShow.opacity,
          visibility: hideOrShow.visibility,
          transform: hideOrShow.translate,
        }}
      >
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        {title !== "" && amount !== "" && date !== "" ? (
          <button type="submit">Add Expense</button>
        ) : (
          <button type="submit" disabled>
            Add Expense
          </button>
        )}
      </div>
    </form>
  );
};

export default NewExpenseForm;
