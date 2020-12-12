import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import routes from './config/routes'

function App() {
  return (
    <div className="App">
<Link to="/">💩</Link>
        { routes }
    </div>
  );
}

export default App;
