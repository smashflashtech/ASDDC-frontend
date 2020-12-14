import React, { useState, useEffect } from 'react'
import SplitScreen2 from '../components/SplitScreen2'
import AmtsModel from '../models/amts'

const Amts = (props) => {
  const [os, setOs] = useState()
  const [trials, setTrials] = useState([])
  const [block] = useState(parseInt(props.match.params.block))
  const [condition] = useState(props.match.params.condition)
  const [phase] = useState('amts')
  const [maxTrials, setMaxTrials] = useState()
  const [criteria, setCriteria] = useState()
  const [metUrl, setMetUrl] = useState()
  const [criteriaRequired] = useState("true")

  const fetchStimuli = () => {
    AmtsModel.stimuli().then((data) => {
      console.log(data.amts)
      const tempOs = require(`../stimuli/${data.amts.observingStim.imagePath}`).default
      setOs(tempOs)
      setCriteria(data.amts.trials.length)
      setMaxTrials(data.amts.trials.length)
      // constructs the trials array for rendering
      const megaStimulusBank = []
      for (let i = 0; i < data.amts.trials.length; i++) {
        const temp = []
        const sample = require(`../stimuli/${data.amts.trials[i][0].imagePath}`).default
        temp.push(sample)
        const trialCode = data.amts.trials[i][0].trialCode
        temp.push(trialCode)
        for (let j = 1; j < data.amts.trials[i].length; j++) {
          let color = data.amts.trials[i][j].color
          temp.push(color)
          let comparison = require(`../stimuli/${data.amts.trials[i][j].imagePath}`).default
          temp.push(comparison)
          let position = data.amts.trials[i][j].class
          temp.push(position)
          let value = data.amts.trials[i][j].value
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
    //CONSTRUCT MET AND UNMET URLS



  }

  useEffect(() => { fetchStimuli() }, [])

  console.log("~~~~~~~~~~~~~~~~~~~~~~~", trials)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", os)

  return (
    <div>
      { trials.length !== undefined ?
        <SplitScreen2
          os={os}
          trials={trials}
          set={condition}
          block={block}
          maxTrials={maxTrials}
          criteria={criteria}
          metUrl={metUrl}
          phase={phase}
          criteriaRequired={criteriaRequired}
        /> : ""}
    </div>
  )
}


export default Amts
