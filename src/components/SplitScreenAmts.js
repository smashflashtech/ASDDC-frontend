import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/splitScreenAmts.css";
import '../css/button.css'

const SplitScreenAmts = (props) => {
  console.log("are we in bidness", props.trials)
  console.log("HERES THE CRITERIA", props.criteria)
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
    console.log("what is the local storage value" , localStorage.getItem(`${props.phase}-${props.feedback}-2count`))
    console.log("what is props.feedback", props.feedback)
    if (parseInt(localStorage.getItem(`${props.phase}-${props.feedback}-2count`)) < 2 && props.feedback === 'true') {
      setMetUrl(`/amts/${props.block + 1}/true`)
      setNotMetUrl(`/amts/${props.block + 1}/true`)
    } else if (parseInt(localStorage.getItem(`${props.phase}-${props.feedback}-2count`)) === 2 && props.feedback === 'true') {
      setMetUrl(`/amts/1/false`)
      setNotMetUrl(`/amts/${props.block + 1}/true`)
    } else if (parseInt(localStorage.getItem(`${props.phase}-${props.feedback}-2count`)) < 2 && props.feedback === 'false') {
      setMetUrl(`/amts/${props.block + 1}/true`)
      setNotMetUrl(`/amts/${props.block + 1}/true`)
    }else if (parseInt(localStorage.getItem(`${props.phase}-${props.feedback}-2count`)) === 2 && props.feedback === 'false') {
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
      if (corrects >= criteria - 1 ){      
        console.log("Hello?")
        localStorage.setItem(`${props.phase}-${props.feedback}-2count`, parseInt(localStorage.getItem(`${props.phase}-${props.feedback}-2count`)) + 1 )
      }
      constructUrl()
    }
    //NEED TO ADD POST to the Database
    //where PARTICIPANT ID (stored in local storate)
    //and trialCode (create a join)
    //STORE THIS
    //position
    //color
    //value
    //cumulative corrects
    
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
          { trial > props.maxTrials ? <Link id="link-no-criteria" onClick={() => { window.location.href = `http://localhost:3000/amts/${parseInt(props.block) + 1}/true` }}><button type="button" id="btn" className="btn" >Temp Reload</button></Link> : <></>}
          {/* {props.criteriaRequired === "false" && trial === props.maxTrials
            ?
            <Link id="link-no-criteria" onClick={() => { window.location.href = props.metUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
            : props.criteriaRequired === "true" && trial - 1 === props.maxTrials && corrects === props.criteria
              ? <Link id="link-criteria-met" onClick={() => { window.location.href = props.metUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
              : props.criteriaRequired === "true" && trial - 1 === props.maxTrials && corrects < props.criteria
                ? <Link id="link-criteria-notmet" onClick={() => { window.location.href = props.notMetUrl }}><button type="button" id="btn" className="btn">Next Task</button></Link>
                :
                <></>
          } */}
        </div>
      </div>
    </div>
  )
}

export default SplitScreenAmts
