import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((element) => (
        <ExpenseItem exp={element} />
      ))}
    </div>
  );
}

export default Expenses;
