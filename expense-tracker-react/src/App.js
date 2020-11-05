
import './App.css';
import { AddTransaction } from './components/AddTransaction'
import { Balance } from './components/Balance'
import { Header } from './components/Header'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
