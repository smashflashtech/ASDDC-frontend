import React from 'react'
import '../css/counter.css'

const Counter = (props) => {
  return (
    <div className="counter-container">
      <div className="counter">
        {props.count}
      </div>
    </div>
  )
}

export default Counter
