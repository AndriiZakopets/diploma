import React from 'react';
import axios from 'axios';

function App() {
  const clickHandler = () => {
    axios.get('/api/test').then(console.log);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={clickHandler}>
          Edit <code>src/App1.tsx</code> and save to reload.
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
