import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/MainMenu.js';

function App() {
  return (
    <div className="App">
      <MainMenu />
      <header className="App-header">
        <p>Yabb Tools are a group of learnings and generators to help inspire you to create your story when inspiration is lacking</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
