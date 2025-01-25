import "./ExpenseDate.css";

function ExpenseDate({ exp }) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {exp.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense-date__year">{exp.getFullYear()}</div>
      <div className="expense-date__day">{exp.getDate()}</div>
    </div>
  );
}

export default ExpenseDate;
