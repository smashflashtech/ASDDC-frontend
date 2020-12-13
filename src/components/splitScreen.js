import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/splitScreen.css";


const SplitScreen = (props) => {
  console.log("are we in bidness", props.trials)
  console.log("post this to the db: ", props.block)
  console.log("use this to determine if trials are done: ", props.maxTrials)
  console.log("heres the OS: ", props.os)
  console.log("heres the passing criteria: ", props.criteria)
  const [sClick, setSClick] = useState(0)
  const [i, setI] = useState(0)
  const [trial, setTrial] = useState(1) //tracks what trial we're on and will be used to construct block code
  const [corrects, setCorrects] = useState(0)
  const [blockCode, setBlockCode] = useState()
  const [trialCode, setTrialCode] = useState()
  const [value, setValue] = useState()
  const [position, setPosition] = useState()

  const handleSampleClick = (e) => {
    e.preventDefault()
    //grabs the trial code
    setTrialCode(e.target.getAttribute("value"))
    console.log("HERES THE TRIAL CODE", trialCode)
    //constructs the block code and stores in state
    setBlockCode(`${props.block}-${trial}`)
    console.log("~~~~~~BLOCK CODE", blockCode)
    //changes os image to sample image
    e.target.setAttribute("src", props.trials[i][0])
    //adds to click count which will determine if comparisons should display
    setSClick(sClick + 1)
    console.log(sClick)
  }

  const handleComparisonClick = (e) => {
    e.preventDefault()
    //info on how the participant did
    setPosition(e.target.getAttribute("class"))
    console.log(position)
    let selectedValue = e.target.getAttribute("value")
    setValue(selectedValue)
    console.log("HERES THE VALUE", value)
    if (selectedValue === "correct") {
      setCorrects(corrects + 1 )
    }
    
    //resets the os-sample stimulus, clicks to 0
    document.getElementById("os-sample").setAttribute("src", props.os)
    setSClick(0)
    console.log("CLEAR S-CLICKS: ",sClick)
    //adds to iterator and trial
    setI(i + 1)
    console.log("iterator should increase: ", i)
    setTrial(trial + 1)
    console.log("trial should increase: ", trial)
  }

  return (
    <div id="container">
      <div className="top">
        <div className="sample-container">
          {props.trials.length && trial <= props.maxTrials ?
            <img alt="os-sample" id="os-sample" className="os-sample" src={props.os} value={props.trials[i][1]} onClick={handleSampleClick}/>
            : <div/>}
        </div>
      </div>
      <div className="bottom">
        <div className="comparison-container">
          {props.trials.length && sClick  === 2 ?
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
