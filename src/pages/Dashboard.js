import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/dashboard.css'

const Dashboard = () => {

  return (
    <div className="dashboard-body">
      <div className="dashboard-container">
        <div className="dash-header">
          <h1 className="d-font">Welcome to the Dashboard</h1>
          <h3 className="d-font">What would you like to do...?</h3>
        </div>
        <div className="dash-options">
          <Link className="d-title link" to="/urlconstructor">
            <div className="dash-card d-1">
              <img className="dash-url" src="https://www.flaticon.com/svg/static/icons/svg/3579/3579201.svg" alt="URL constructor" />
              <p>URL Constructor</p>
            </div></Link>

          <Link className="d-title link" to="/participant/all">
            <div className="dash-card d-2">
              <img className="dash-all" src="https://www.flaticon.com/svg/static/icons/svg/1071/1071539.svg" />
              <p>All Participants</p>
            </div>
          </Link>

          <Link className="d-title link" to="/participant/create">
            <div className="dash-card d-3">
              <img className="dash-one" src="https://www.flaticon.com/svg/static/icons/svg/2444/2444467.svg" />
              <p>Create Participant</p>
            </div>
          </Link>

          <Link className="d-title link" to="/">
            <div className="dash-card d-4">
              <img className="dash-home" src="https://www.flaticon.com/svg/static/icons/svg/3596/3596083.svg" />
              <p>Home</p>
            </div>
          </Link>


        </div>
      </div>
      <div className="attribution">Icons made by <a className="attribution" href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a className="attribution" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  )
}

export default Dashboard
