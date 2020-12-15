import React from 'react'
import '../css/counter.css'

const Counter = (props) => {
  return (
    <div className="counter-container">
      <div className="counter">
        <div className="count">{props.count}</div>
      </div>
    </div>
  )
}

export default Counter
