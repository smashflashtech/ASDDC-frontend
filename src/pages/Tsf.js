import React, { useState, useEffect } from 'react'
import TsfModel from '../models/tsf'

const Tsf = (props) => {
  const [phase] = useState('tsf')
  const [block] = useState(parseInt(props.match.params.block))
  const [os, setOs] = useState()
  const [trials, setTrials] = useState()
  const [maxTrials, setMaxTrials] = useState()
  const [criteria, setCriteria] = useState()
  const [criteriaRequired] = useState("true")

  const fetchStimuli = () => {
    TsfModel.stimuli().then((data) => {
      console.log(data.tsf)
      const tempOs = require(`../stimuli/${data.tsf.observingStim.imagePath}`).default
      setOs(tempOs)
      setCriteria(data.tsf.trials.length)
      setMaxTrials(data.tsf.trials.length)
      // constructs the trials array for rendering
      const megaStimulusBank = []
      for (let i = 0; i < data.tsf.trials.length; i++) {
        const temp = []
        const trialCode = data.tsf.trials[i][0].trialCode
        temp.push(trialCode)
        for (let j = 1; j < data.tsf.trials[i].length; j++) {
          let color = data.tsf.trials[i][j].color
          temp.push(color)
          let comparison = require(`../stimuli/${data.tsf.trials[i][j].imagePath}`).default
          temp.push(comparison)
          let position = data.tsf.trials[i][j].class
          temp.push(position)
          let value = data.tsf.trials[i][j].value
          temp.push(value)
        }
        megaStimulusBank.push(temp)
        for (let k = 0; k < megaStimulusBank.length; k++) {                                       //SHUFFLES THE ARRAY
          let l = Math.floor(Math.random() * megaStimulusBank.length);
          let temp = megaStimulusBank[k];
          megaStimulusBank[k] = megaStimulusBank[l];
          megaStimulusBank[l] = temp;
        }
      }
      setTrials(megaStimulusBank)
    })
  }
  useEffect(() => { fetchStimuli() }, [])

  console.log("~~~~~~~~~~~~~~~~~~~~~~~", trials)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", os)


  return (
    <div>

    </div>
  )
}

export default Tsf
