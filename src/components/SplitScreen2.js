import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/splitScreen2.css";
import GResponseModel from '../models/gResponse'
import Feedback from '../components/Feedback'
import UseFeedback from '../hooks/UseFeedback'

const SplitScreen2 = (props) => {
  const [participant_id] = useState(localStorage.getItem('participant_id'))
  const [sClick, setSClick] = useState(0)
  const [i, setI] = useState(0)
  const [trial, setTrial] = useState(1) //tracks what trial we're on and will be used to construct block code
  const [criteria, setCriteria] = useState(props.criteria)
  const [corrects, setCorrects] = useState(0)
  const [blockCode, setBlockCode] = useState()
  const [trialCode, setTrialCode] = useState()
  const [color, setColor] = useState() // These are here for dev tracking
  const [value, setValue] = useState() // These are here for dev tracking
  const [position, setPosition] = useState() // These are here for dev tracking
  console.log('The ', value, 'item selected was ', color, ' located on the ', position, ' position.' )  // These are here for dev tracking


  const handleSampleClick = (e) => {
    e.preventDefault()
    setCriteria(props.criteria)
    //grabs the trial code
    setTrialCode(e.target.getAttribute('value'))
    //constructs the block code and stores in state
    setBlockCode(`${props.phase}-${props.condition}-${props.block}-${trial}`)
    //changes os image to invisible
    e.target.setAttribute('src', '')
    e.target.setAttribute('alt', '')
    //adds to click count which will determine if comparisons should display
    setSClick(sClick + 1)
  }

  const handleComparisonClick = (e) => {
    e.preventDefault()
    //counts trial
    setTrial(trial + 1)
    //info on how the participant did
    let color = e.target.getAttribute('alt')
    setColor(color)
    setPosition(e.target.getAttribute('class'))
    let selectedValue = e.target.getAttribute('value')
    setValue(selectedValue)
    if (selectedValue === 'correct') {
      setCorrects(corrects + 1)
    }


    //resets the os-sample stimulus, clicks to 0
    document.getElementById('os-sample').setAttribute('src', props.os)
    document.getElementById('os-sample').setAttribute('alt', 'os-sample')
    setSClick(0)
    //adds to iterator
    setI(i + 1)

    GResponseModel.create(trialCode ,{
      participant_id: participant_id,
      position: e.target.getAttribute("class"),
      value: e.target.getAttribute("value"),
      color_size: e.target.getAttribute("alt"),
      block_code: blockCode,
      feedback: Boolean(props.feedback)
    }).then(data => {})

    UseFeedback(selectedValue)
  }

  return (
    <div id="container">
      <div className="top">
        <div className="sample-container">
          {props.trials.length && trial <= props.maxTrials ?
            <img alt="os-sample" id="os-sample" className="os-sample" src={props.os} value={props.trials[i][0]} onClick={handleSampleClick} />
            : <div />}
        </div>
      </div>
      <div className="bottom">

        <div className="comparison-container">
          {props.trials.length && sClick === 1 ?
            <>
              <img alt={props.trials[i][1]} src={props.trials[i][2]} className={props.trials[i][3]} value={props.trials[i][4]} onClick={handleComparisonClick} />
              <img alt={props.trials[i][5]} src={props.trials[i][6]} className={props.trials[i][7]} value={props.trials[i][8]} onClick={handleComparisonClick} />
            </>
            :
            <div />
          }

          { trial > props.maxTrials && props.criteriaRequired === "false" ?
            <Link id="link-criteria-met" onClick={() => { window.location.href = props.metUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
            : trial > props.maxTrials && corrects === criteria ? 
            <Link id="link-criteria-met" onClick={() => { window.location.href = props.metUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
            : trial > props.maxTrials && corrects < criteria ?
            <Link id="link-criteria-notmet" onClick={() => { window.location.href = props.notMetUrl }}><button type="button" id="btn" className="btn">Next Task</button></Link>
            :
            <></>
          }
        </div>
      </div>
            <Feedback id={"yay"} overlayClass={"confetti"} contentClass={"show"} opacity={1}/>
      <Feedback id={"nay"} overlayClass={"blackScreen"} contentClass={"noShow"} opacity={0}/>
      <Feedback id={"neutral"} overlayClass={"grayScreen"} contentClass={"noShow"} opacity={0}/>
    </div>
  )
}

export default SplitScreen2
