import Expenses from "./components/Expenses/Expenses";

function App() {

  const today = new Date();
  const expenseData = [
    {
      date: today,
      title: 'Title1',
      amount: 1000.00,
    },    
    {
      date: today,
      title: 'Title2',
      amount: 2000.00,
    },  
    {
      date: today,
      title: 'Title3',
      amount: 3000.00,
    },    
    {
      date: today,
      title: 'Title4',
      amount: 4000.00,
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenseData}/>
    </div>
  );
}

export default App;