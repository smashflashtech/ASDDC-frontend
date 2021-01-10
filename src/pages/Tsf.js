import React, { useState, useEffect } from 'react'
import TsfModel from '../models/tsf'
import SplitScreen2 from '../components/SplitScreen2'

const Tsf = (props) => {
  const [phase] = useState('tsf')
  const [condition] = useState(props.match.params.condition)
  const [block] = useState(parseInt(props.match.params.block))
  const [os, setOs] = useState()
  const [trials, setTrials] = useState([])
  const [maxTrials, setMaxTrials] = useState()
  const [criteria, setCriteria] = useState()
  const [criteriaRequired] = useState("false")
  const [metUrl, setMetUrl] = useState()
  localStorage.setItem('feedback', 'false')

  const fetchStimuli = () => {
    TsfModel.stimuli().then((data) => {
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
    localStorage.setItem(`${phase}-${condition}`, block)
    //set metUrl here
    if (condition === 'pre') {
      setMetUrl('http://localhost:3000/instructions/spair/Z')
    } else if (condition === "post")
      setMetUrl(`http://localhost:3000/instructions/npst/${block}`)
  }
  useEffect(() => { fetchStimuli() }, [])


  return (
    <div>
    { trials.length !== undefined ?
      <SplitScreen2
        os={os}
        trials={trials}
        maxTrials={maxTrials}
        criteria={criteria}
        phase={phase}
        condition={condition}
        block={block}
        criteriaRequired={criteriaRequired}
        metUrl={metUrl}
      /> : ""}
    </div>
  )
}

export default Tsf
