import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div>
      <h3>Researcher Tools:</h3>
      <ul className="home-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/createparticipant">Create Participant</Link></li>
        <li><Link to="/urlconstructor">UrlConstructor</Link></li>
        <li><Link to="/particpant/1">Participant ONE Info</Link></li>
        <li><Link to="/developer">Developer</Link></li>
      </ul>

      <h3>Welcome Pages</h3>
      <ul className="home-list">
        <li><Link to="/ASDDC/1/1/A/1">Group 1 (MET) - dyad 1</Link></li>
        <li><Link to="/ASDDC/1/2/A/2">Group 1 (MET) - dyad 2</Link></li>
        <li><Link to="/ASDDC/2/3/I/1">Group 2 (EVOT) - dyad 1</Link></li>
        <li><Link to="/ASDDC/2/4/I/2">Group 2 (EVOT) - dyad 2</Link></li>
        <li><Link to="/ASDDC/3/5/Q/1">Group 3 (PSVOT) - dyad 1</Link></li>
        <li><Link to="/ASDDC/3/6/Q/2">Group 3 (PSVOT) - dyad 2</Link></li>
      </ul>
    </div>
  )
}

export default Dashboard
