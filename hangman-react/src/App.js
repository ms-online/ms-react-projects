
import './App.css';
import Figure from './components/Figure'
import Header from './components/Header'
import Notification from './components/Notification'
import Popup from './components/Popup'
import Word from './components/Word'
import WrongLetters from './components/WrongLetters'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters/>
        <Word />
        </div>
        <Popup />
        <Notification/>
    </div>
  );
}

export default App;
