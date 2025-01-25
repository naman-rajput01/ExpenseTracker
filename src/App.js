import Expenses from "./components/Expenses";

function App() {
  const expense = [
    {
      title: "Car Insurance",
      amount: 1000,
      date: new Date(2024, 1, 1),
    },
    {
      title: "Grocery",
      amount: 500,
      date: new Date(2024, 1, 6),
    },
    {
      title: "Lunch",
      amount: 100,
      date: new Date(2024, 1, 10),
    },
  ];
  return (
    <div>
      <h2>Lets start!</h2>
      <Expenses expenses={expense} />
    </div>
  );
}

export default App;
