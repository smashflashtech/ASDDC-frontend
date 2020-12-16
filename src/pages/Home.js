import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import '../css/home.css'

const Home = () => {



  return (
    <div>
      <h1>Welcome!</h1>



      <h3>Click One:</h3>
      <ul className="home-list">
        <li><Link to="/developer"  >I'm a developer</Link></li>
        <li><Link to="/dashboard" >I'm a researcher</Link></li>

      </ul>

    </div>
  )
}

export default Home
