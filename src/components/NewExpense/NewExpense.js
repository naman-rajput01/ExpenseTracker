import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const [isEditing , setIsEditing]=useState(false);

    const stopEditingHandler =()=>{
        setIsEditing(false)
    }

    const startEditingHandler =()=>{
        setIsEditing(true)
    }

    const saveExpenseData=(enteredData)=>{
        const expenseData={
        ...enteredData,
        id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }


  return (
    <div className="new-expense">
        {!isEditing && 
        <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData}  onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
