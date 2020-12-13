import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/splitScreen.css";


const SplitScreen = (props) => {
  console.log("are we in bidness", props.trials)
  console.log("post this to the db: ", props.block)
  console.log("use this to determine if trials are done: ", props.maxTrials)
  console.log("heres the OS: ", props.os)
  const [sClick, setSClick] = useState(0)
  const [i, setI] = useState(0)
  const [trial, setTrial] = useState(1) //tracks what trial we're on and will be used to construct block code
  const [trialCode, setTrialCode] = useState()
  
  const [score, setScore] = useState()

  const handleSampleClick = (e) => {
    e.preventDefault()
    setTrialCode(e.target.getAttribute("value"))
    console.log("HERES THE TRIAL CODE", trialCode)
    e.target.setAttribute("src", props.trials[i][0])
    setSClick(sClick + 1)
    console.log(sClick)
  }

  const handleComparisonClick = (e) => {
    e.preventDefault()
    setScore(e.target.getAttribute("value"))
    console.log("HERES THE SCORE", score)
    // document.getElementbyId("os-sample").setAttribute("src", props.os)
    setSClick(0)
    console.log("CLEAR S CLICKS: ",sClick)
    setI(i + 1)
    setTrial(trial + 1)
  }

  return (
    <div id="container">
      <div className="top">
        <div className="sample-container">
          {props.trials.length ?
            <img alt="os-sample" id="os-sample" className="os-sample" src={props.os} value={props.trials[i][1]} onClick={handleSampleClick}/>
            : <div/>}
        </div>
      </div>
      <div className="bottom">
        <div className="comparison-container">
          {props.trials.length && sClick === 2 ?
            <>
              <img alt={props.trials[i][3]} src={props.trials[i][2]} className={props.trials[i][3]} value={props.trials[i][4]} onClick={handleComparisonClick} />
              <img alt={props.trials[i][6]} src={props.trials[i][5]} className={props.trials[i][6]} value={props.trials[i][7]} onClick={handleComparisonClick}/>
              <img alt={props.trials[i][9]} src={props.trials[i][8]} className={props.trials[i][9]} value={props.trials[i][10]} onClick={handleComparisonClick}/>
            </>
            :
            <div/>
            }
        </div>
      </div>
    </div>
    // there will be a link generated based on an if statement that will either reset page or send to the next phase
  )
}

export default SplitScreen
