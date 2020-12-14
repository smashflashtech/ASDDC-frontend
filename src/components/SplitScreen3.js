import React, { useState, useEffect } from 'react'
import {Link, Redirect} from 'react-router-dom'
import "../css/splitScreen3.css";
import Button from './Button'
import '../css/button.css'

const SplitScreen3 = (props) => {
  console.log("are we in bidness", props.trials)
  console.log("post this to the db: ", props.block)
  console.log("post this to the db: ", props.set)
  console.log("use this to determine if trials are done: ", props.maxTrials)
  console.log("heres the OS: ", props.os)
  console.log("heres the passing criteria: ", props.criteria)
  const [sClick, setSClick] = useState(0)
  const [i, setI] = useState(0)
  const [trial, setTrial] = useState(1) //tracks what trial we're on and will be used to construct block code
  const [corrects, setCorrects] = useState(0)
  const [blockCode, setBlockCode] = useState()
  const [trialCode, setTrialCode] = useState()
  const [color, setColor] = useState()
  const [value, setValue] = useState()
  const [position, setPosition] = useState()
  const [criteria, setCriteria] = useState()
  // const [buttonPath, setButtonPath] = useState()
  
  const handleSampleClick = (e) => {
    e.preventDefault()
    setCriteria(props.criteria)
    //grabs the trial code
    setTrialCode(e.target.getAttribute("value"))
    //constructs the block code and stores in state
    setBlockCode(`${props.set}-${props.block}-${trial}`)
    //changes os image to sample image
    e.target.setAttribute("src", props.trials[i][0])
    //adds to click count which will determine if comparisons should display
    setSClick(sClick + 1)
  }

  const handleComparisonClick = (e) => {
    e.preventDefault()
    //info on how the participant did
    setColor(e.target.getAttribute("alt"))
    setPosition(e.target.getAttribute("class"))
    let selectedValue = e.target.getAttribute("value")
    setValue(selectedValue)
    if (selectedValue === "correct") {
      setCorrects(corrects + 1)
    }

    //resets the os-sample stimulus, clicks to 0
    document.getElementById("os-sample").setAttribute("src", props.os)
    setSClick(0)
    //adds to iterator
    setI(i + 1)
    //counts trial
    setTrial(trial + 1)

    //NEED TO ADD POST to the Database
    //where PARTICIPANT ID (stored in local storate)
    //and trialCode (create a join)
    //STORE THIS
    //position
    //color
    //value
    //cumulative corrects
  }

  // const handleNext = (e) => {
  //   e.preventDefault()
  //   setSClick(0)
  //   setI(0)
  //   setTrial(1)
  //   setCorrects(0)
  //   // document.getElementById("namts-btn").remove()
  //   // document.getElementById("namts-link").remove()
  //   window.location.reload()
  // }

  // if (props.phase === "dct") {
  //   setButtonPath(<Link id="dct-link" to={props.metUrl}><button type="button" className="btn">Next Task</button></Link>)
  // } else if (props.phase === "namts" && corrects === props.criteria){
  //   setButtonPath(<Link id="namts-link" to={props.metUrl}><button type="button" id="namts-btn" className="btn">Next Task</button></Link>)
  // } else if (props.phase === "namts" && corrects < props.criteria) {
  //   setButtonPath(<Link id="namts-link"to={props.notMetUrl}><button type="button" id="namts-btn" className="btn">Next Task</button></Link>)
  // }

  return (
    <div id="container">
      <div className="top">
        <div className="sample-container">
          {props.trials.length && trial <= props.maxTrials ?
            <img alt="os-sample" id="os-sample" className="os-sample" src={props.os} value={props.trials[i][1]} onClick={handleSampleClick} />
            : <div />}
        </div>
      </div>
      <div className="bottom">

        <div className="comparison-container">
          {props.trials.length && sClick === 2 ?
            <>
              <img alt={props.trials[i][2]} src={props.trials[i][3]} className={props.trials[i][4]} value={props.trials[i][5]} onClick={handleComparisonClick} />
              <img alt={props.trials[i][6]} src={props.trials[i][7]} className={props.trials[i][8]} value={props.trials[i][9]} onClick={handleComparisonClick} />
              <img alt={props.trials[i][10]} src={props.trials[i][11]} className={props.trials[i][12]} value={props.trials[i][13]} onClick={handleComparisonClick} />
            </>
            :
            <div />
          }
                    
          {/* { trial <= props.maxTrials+1 && corrects === props.criteria ? 
            <Link id="link" onClick={()=>{window.location.href=props.metUrl}}><button type="button" id="btn" className="btn" >Next Task</button></Link>
          :
            <Link id="link" onClick={()=>{window.location.href=props.notMetUrl}><button type="button" id="btn" className="btn">Next Task</button></Link>
          } */}
        </div>
      </div>
    </div>
    // there will be a link generated based on an if statement that will either reset page or send to the next phase
  )
}

export default SplitScreen3
