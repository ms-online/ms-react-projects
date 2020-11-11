import {AppProvider} from './contexts/context'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'


function App() {
  return (
    <AppProvider>
    <main>
      <Navbar />
      <CartContainer />
      </main>
      </AppProvider>
  );
}

export default App;
