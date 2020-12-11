import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import routes from './config/routes'

function App() {
  return (
    <div className="App">
      <h1>Help me graduate.<Link to="/">💩</Link></h1>
        { routes }
    </div>
  );
}

export default App;
