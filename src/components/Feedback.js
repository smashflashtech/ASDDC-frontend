import React from 'react'
import '../css/feedback.css'
import Confetti from 'react-confetti'

const Feedback = (props) => {
  // const { width, height } = useWindowSize()
  return (
    <div className={props.overlayClass}>
      <div className={props.contentClass}>
        <Confetti opacity={props.opacity}/>
      </div>
    </div>
  )
}

export default Feedback
