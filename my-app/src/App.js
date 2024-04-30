import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {getData} from './flask.js';

function App() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      let response = await getData();
      setInfo(response['data']);
    }
    getInfo();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
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
          {`Learn React ${info}`}
        </a>
      </header>
    </div>
  );
}

export default App;
