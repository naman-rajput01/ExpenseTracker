import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const handleSubmitClick = (e) => {
    debugger;
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setAmount("");
    setTitle("");
    setDate("");

    // debugger;
    // setAllExpenses([...items,userinput]);
  };
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  // const [userinput , setUserInput]=useState({
  //     title:"",
  //     amount:"",
  //     date:"",
  //     id:"45",
  // })
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            // onChange={(e) => setUserInput({
            //     ...userinput,
            //     title:e.target.value
            // })}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            name="amount"
            value={amount}
            // onChange={(e) => setUserInput({
            //     ...userinput,
            //     amount:e.target.value
            // })}
            // onChange={(e)=>{
            //     setUserInput((prevState)=>{
            //         return {...prevState,title:e.target.value}
            //     })
            // }}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2025-01-01"
            max="2027-12-31"
            name="date"
            value={date}
            // onChange={(e) => setUserInput({
            //     ...userinput,
            //     date:new Date(e.target.value)
            // })}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" onClick={handleSubmitClick}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
