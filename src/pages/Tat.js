import React, { useState, useEffect } from 'react'
import TatModel from '../models/tat'
import '../css/tat.css'

const Tat = () => {
  const [sClick, setSClick] = useState(0)
  const [i, setI] = useState(0)
  const [trial, setTrial] = useState(1)
  const [trials, setTrials] = useState([])
  const [os, setOs] = useState()
  const [maxTrials, setMaxTrials] = useState()
  const [blockCode, setBlockCode] = useState()
  const [trialCode, setTrialCode] = useState()
  const [value, setValue] = useState()
  const [corrects, setCorrects] = useState(0)
  const [phase] = useState('tat')

  const fetchStimuli = () => {
    TatModel.stimuli().then((data) => {
      console.log(data.tat)
      //constructs the image path string
      setOs(require(`../stimuli/${data.tat.observingStim.imagePath}`).default)
      for (let k = 0; k < data.tat.wordProblem.length; k++) {                                       //SHUFFLES THE ARRAY
        let l = Math.floor(Math.random() * data.tat.wordProblem.length);
        let temp = data.tat.wordProblem[k];
        data.tat.wordProblem[k] = data.tat.wordProblem[l];
        data.tat.wordProblem[l] = temp;
      }
      setTrials(data.tat.wordProblem)
      setMaxTrials(data.tat.wordProblem.length)
    })

  }


  const handleSampleClick = (e) => {
    e.preventDefault()
    //grabs the trial code
    setTrialCode(e.target.getAttribute('value'))
    //constructs the block code and stores in state
    setBlockCode(`${phase}-${trial}`)
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
    let selectedValue = e.target.getAttribute('value')
    setValue(selectedValue)
    if (selectedValue === 'correct') {
      setCorrects(corrects + 1)
    }
    //resets the os-sample stimulus, clicks to 0
    //adds to iterator

    document.getElementById('os').setAttribute('src', os)
    document.getElementById('os').setAttribute('alt', 'os')
    setSClick(0)
    if (i < 15) {
      setI(i + 1)
    } else if (i === 15) {
      setI(1)
    }


    //NEED TO ADD POST to the Database
    //where PARTICIPANT ID (stored in local storate)
    //and trialCode (create a join)
    //STORE THIS
    //trial code
    //block code
    //value
  }

  useEffect(() => { fetchStimuli() }, [])

  console.log("~~~~~~~~~~~~~~~~~~~~~~~", trials)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", os)

  return (

    <div className="tat-container">
      <div className="tat-os">
        {trials.length && trial <= maxTrials ?
          <img alt="os" id="os" className="os" src={os} value={trials[i][0]} onClick={handleSampleClick} />
          : <div />}
      </div>
      <div className="word-problem">
        {trials.length && sClick === 1 ?
          <><h1 onClick={handleComparisonClick} value="correct">{trials[i][1]}</h1>
            <p>{trials[i][2]}</p></>
          : <div />}
      </div>
      {trials.length && corrects === 2 ?
        <div className="done-container">
          <a className="done" value="done" href="http://localhost:3000/dct/post/2">Next Task</a>
        </div>
        : <div />}
      {trials.length && sClick === 1 ?
        <div className="next-container">
          <p className="next" value="incorrect" onClick={handleComparisonClick}>Next Problem</p>
        </div>
        : <div />}
    </div>


  )
}

export default Tat
