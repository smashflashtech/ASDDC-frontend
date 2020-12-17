import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/splitScreen3.css";
import '../css/button.css'
import GResponseModel from '../models/gResponse'

const SplitScreen3 = (props) => {
  //Logic Data
  const [sClick, setSClick] = useState(0)
  const [i, setI] = useState(0)
  const [trial, setTrial] = useState(1)
  const [criteria, setCriteria] = useState()
  const [corrects, setCorrects] = useState(0)
  //Data to post to database
  const [participant_id] = useState(localStorage.getItem('participant_id'))
  const [blockCode, setBlockCode] = useState()
  const [trialCode, setTrialCode] = useState()
  const [color, setColor] = useState()
  const [value, setValue] = useState()
  const [position, setPosition] = useState()



  const handleSampleClick = (e) => {
    e.preventDefault()
    setCriteria(props.criteria)                                         //grabs the trial code
    setTrialCode(e.target.getAttribute("value"))                        //constructs the block code and stores in state
    setBlockCode(`${props.phase}-${props.set}-${props.block}-${trial}`) //changes os image to sample image
    e.target.setAttribute("src", props.trials[i][0])                    //adds to click count which will determine if comparisons should display
    setSClick(sClick + 1)
  }

  const handleComparisonClick = (e) => {
    e.preventDefault()
    setTrial(trial + 1)                                   //counts trial
    setColor(e.target.getAttribute("alt"))                //info on how the participant did
    setPosition(e.target.getAttribute("class"))
    let selectedValue = e.target.getAttribute("value")
    setValue(selectedValue)
    if (selectedValue === "correct") {
      setCorrects(corrects + 1)
    }

    //Logic Magic
    document.getElementById("os-sample").setAttribute("src", props.os) //resets the os-sample stimulus
    setSClick(0) //sample clicks to 0
      setI(i + 1)   //adds to iterator

    //Post performance to the database
    GResponseModel.create(trialCode, {
      participant_id: participant_id,
      position: e.target.getAttribute("class"),
      value: e.target.getAttribute("value"),
      color_size: e.target.getAttribute("alt"),
      block_code: blockCode,
      feedback: Boolean(props.feedback)
    }).then(data => { })
  }

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

          {trial > props.maxTrials && props.phase === 'dct' && parseInt(localStorage.getItem('dct-post')) === 1 && corrects < criteria
            ?
            <Link id="link-notmet-criteria" onClick={() => { window.location.href = props.notMetUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
            : props.criteriaRequired === "false" && trial > props.maxTrials
              ?
              <Link id="link-no-criteria" onClick={() => { window.location.href = props.metUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
              : props.criteriaRequired === "true" && trial > props.maxTrials && corrects === props.criteria
                ?
                <Link id="link-criteria-met" onClick={() => { window.location.href = props.metUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
                : props.criteriaRequired === "true" && trial > props.maxTrials && corrects < props.criteria
                  ?
                  <Link id="link-criteria-notmet" onClick={() => { window.location.href = props.notMetUrl }}><button type="button" id="btn" className="btn">Next Task</button></Link>
                  :
                  <></>
          }
        </div>
      </div>
    </div>
  )
}

export default SplitScreen3
