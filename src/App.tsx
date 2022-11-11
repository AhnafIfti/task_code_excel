import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import store from './redux/store';
import { Provider } from 'react-redux'
import { fetchUsers } from './feature/mostEmailed/mostEmailedSlice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={ store }>
          <BrowserRouter>
            <MainComponent />
          </BrowserRouter>
        </Provider>
      </header>
    </div>
  );
}

export default App;
