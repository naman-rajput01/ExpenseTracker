import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ exp }) {
  return (
    <div className="expense-item">
      <ExpenseDate exp={exp.date} />
      <div className="expense-item__description">
        <h2>{exp.title}</h2>
        <div className="expense-item__price">Rs. {exp.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
