import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import routes from './config/routes'

function App() {
  return (
    <div className="App">
        { localStorage.getItem('dev') === 'on' ? <Link to="/developer">💩</Link> : <></>}
        { routes }
    </div>
  );
}

export default App;
