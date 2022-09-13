import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenseData = [
    {
      date: new Date(),
      title: 'Buceta',
      amount: 1000.00,
    },    
    {
      date: new Date(),
      title: 'Cacete',
      amount: 2000.00,
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseData.map((ex) => (
        <ExpenseItem title={ex.title} date={ex.date} amount={ex.amount}></ExpenseItem>
      ))}
    </div>
  );
}

export default App;