import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/home.css'

const Home = () => {



  return (
    <div className="h-body">
      <div className="h-container">
        <div className="h-banner">
          <h1 className="incon">Welcome to ASDDC!</h1>
          <h3 className="incon">Who are you? </h3>
        </div>

        <div className="h-options">
          <div className="h-card">
            <Link className="h-link oswald" to="/developer"  >
              <div className="h-title">
                <img className="h-dev" src="https://www.flaticon.com/svg/static/icons/svg/2890/2890354.svg" />
                <p className="oswald">I'm a developer</p>
              </div>
            </Link>
          </div>

          <div className="h-card">
            <Link className="h-link oswald" to="/dashboard" >
              <img className="h-re" src="https://www.flaticon.com/svg/static/icons/svg/3063/3063738.svg" />
              <p className="oswald">I'm a researcher</p>
              <div className="h-title">
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
