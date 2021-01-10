import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/splitScreenAmts.css";
import '../css/button.css'
import GResponseModel from '../models/gResponse'
import Feedback from '../components/Feedback'
import UseFeedback from '../hooks/UseFeedback'

const SplitScreenAmts = (props) => {
  const [participant_id] = useState(localStorage.getItem('participant_id'))
  const [sClick, setSClick] = useState(0)
  const [i, setI] = useState(0)
  const [trial, setTrial] = useState(1) //tracks what trial we're on and will be used to construct block code
  const [corrects, setCorrects] = useState(0)
  const [criteria, setCriteria] = useState()
  const [blockCode, setBlockCode] = useState()
  const [trialCode, setTrialCode] = useState()
  const [color, setColor] = useState()
  const [value, setValue] = useState()
  const [position, setPosition] = useState()

  const [metUrl, setMetUrl] = useState()
  const [notMetUrl, setNotMetUrl] = useState()

  const constructUrl = () => {
    if (parseInt(localStorage.getItem(`${props.phase}-${props.feedback}-2count`)) < 2 && props.feedback === 'true') {
      setMetUrl(`/amts/${props.block + 1}/true`)
      setNotMetUrl(`/amts/${props.block + 1}/true`)
    } else if (parseInt(localStorage.getItem(`${props.phase}-${props.feedback}-2count`)) === 2 && props.feedback === 'true') {
      setMetUrl(`/amts/1/false`)
      setNotMetUrl(`/amts/${props.block + 1}/true`)
    } else if (parseInt(localStorage.getItem(`${props.phase}-${props.feedback}-2count`)) < 2 && props.feedback === 'false') {
      setMetUrl(`/amts/${props.block + 1}/false`)
      setNotMetUrl(`/amts/${props.block + 1}/false`)
    } else if (parseInt(localStorage.getItem(`${props.phase}-${props.feedback}-2count`)) === 2 && props.feedback === 'false') {
      setMetUrl(`/instructions/dct/post`)
      setNotMetUrl(`/amts/${props.block + 1}/true`)
    }
  }

  const handleSampleClick = (e) => {
    e.preventDefault()
    setCriteria(parseInt(props.criteria))
    //grabs the trial code
    setTrialCode(e.target.getAttribute("value"))
    //constructs the block code and stores in state
    setBlockCode(`${props.phase}-${props.block}-${trial}`)
    //changes os image to sample image
    e.target.setAttribute("src", props.trials[i][0])
    //adds to click count which will determine if comparisons should display
    setSClick(sClick + 1)
  }

  const handleComparisonClick = (e) => {
    e.preventDefault()
    //counts trial
    setTrial(trial + 1)
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
    //checks to see if URL should be constructed
    if (trial === props.trials.length) {
      if (corrects >= criteria - 1) {
        localStorage.setItem(`${props.phase}-${props.feedback}-2count`, parseInt(localStorage.getItem(`${props.phase}-${props.feedback}-2count`)) + 1)
      }
      constructUrl()
    }
    GResponseModel.create(trialCode ,{
      participant_id: participant_id,
      position: e.target.getAttribute("class"),
      value: e.target.getAttribute("value"),
      color_size: e.target.getAttribute("alt"),
      block_code: blockCode,
      feedback: Boolean(props.feedback)
    }).then(data => {
    })

    UseFeedback(selectedValue)
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
            </>
            :
            <div />
          }
          {trial > props.maxTrials && corrects === criteria ?
            <Link id="link-criteria-met" onClick={() => { window.location.href = metUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
            : trial > props.maxTrials && corrects < criteria ?
              <Link id="link-criteria-notmet" onClick={() => { window.location.href = notMetUrl }}><button type="button" id="btn" className="btn">Next Task</button></Link>
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

export default SplitScreenAmts
