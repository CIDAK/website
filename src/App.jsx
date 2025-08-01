import './App.css';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="App" style={{ marginLeft: "220px" }}>
      <Sidebar /> {/* I am adding the footer for us @ianthehamster */}
      <header className="App-header">
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
