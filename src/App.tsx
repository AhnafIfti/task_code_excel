import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
            <MainComponent />
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
