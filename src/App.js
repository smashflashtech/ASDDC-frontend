import React from 'react'
import './App.css';
import routes from './config/routes'

function App() {
  return (
    <div className="App">
      <h1>Help me graduate.</h1>
        { routes }
    </div>
  );
}

export default App;
