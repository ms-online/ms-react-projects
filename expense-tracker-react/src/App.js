
import './App.css';
import { AddTransaction } from './components/AddTransaction'
import { Balance } from './components/Balance'
import { Header } from './components/Header'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { GlobalProvider } from './contexts/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction/>
      </div>
      </GlobalProvider>

  
  );
}

export default App;
