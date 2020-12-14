import React from 'react'
import { Link }  from 'react-router-dom'
import '../css/button.css'

const Button = (props) => {
  return (
    <>
      <Link to={props.url}>
        <button className="btn">
          {props.text}
        </button>
        </Link>
    </>
  )
}

export default Button
