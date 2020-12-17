import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div>
      <h3>Researcher Tools:</h3>
      <ul className="home-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/urlconstructor">UrlConstructor</Link></li>
        <li><Link to="/participant/create">Create Participant</Link></li>
        <li><Link to="/participant/all">All Participants</Link></li>
        <li><Link to="/developer">Developer</Link></li>
      </ul>
    </div>
  )
}

export default Dashboard
