import React from 'react'
import { Link }  from 'react-router-dom'
import '../css/button.css'

const Button = (props) => {
  return (
    <>
      <Link to={props.Url}>
        <button className="welcome-btn">
          Start
        </button>
        </Link>
    </>
  )
}

export default Button
