import React, { useState, useEffect } from 'react'
import NamtsModel from '../models/namts'
import SplitScreen3 from '../components/SplitScreen3'

const Namts = (props) => {
  const [block] = useState(parseInt(props.match.params.block))
  const [phase] = useState('namst')
  const [set] = useState(parseInt(props.match.params.set))
  const [os, setOs] = useState()
  const [trials, setTrials] = useState()
  const [maxTrials, setMaxTrials] = useState()
  const [criteria, setCriteria] = useState()
  const [metUrl, setMetUrl] = useState()
  const [notMetUrl, setNotMetUrl] = useState()
  const [criteriaRequired] = useState("true")

  const fetchStimuli = () => {
    NamtsModel.stimuli(set).then((data) => {
      console.log(data.namts)
      //Sets Observing stimulus
      const tempOs = require(`../stimuli/${data.namts.observingStim.imagePath}`).default
      setOs(tempOs)
      setCriteria(data.namts.trials.length)
      setMaxTrials(data.namts.trials.length)
      // constructs the image path string
      const megaStimulusBank = []
      for (let i = 0; i < data.namts.trials.length; i++) {
        const temp = []
        const sample = require(`../stimuli/${data.namts.trials[i][0].imagePath}`).default
        temp.push(sample)
        const trialCode = data.namts.trials[i][0].trialCode
        temp.push(trialCode)
        for (let j = 1; j < data.namts.trials[i].length; j++) {
          let size = data.namts.trials[i][j].size
          temp.push(size)
          let comparison = require(`../stimuli/${data.namts.trials[i][j].imagePath}`).default
          temp.push(comparison)
          let position = data.namts.trials[i][j].class
          temp.push(position)
          let value = data.namts.trials[i][j].value
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
      localStorage.setItem(`${phase}`, set)
    })
    //constructing URLs
    if (set < 115) {
      setMetUrl(`/namts/${set + 1}/1`)
      setNotMetUrl(`/namts/${set}/${block + 1}`)
    } else if (set === 115) {
      setMetUrl(`/instructions/amts/true/Z"`)
      setNotMetUrl(`/namts/${set}/${block + 1}`)
    }
  }
  useEffect(() => { fetchStimuli() }, [])



  return (
    <div>
      { trials !== undefined ? 
        <SplitScreen3
          os={os}
          trials={trials}
          set={set}
          block={block}
          maxTrials={maxTrials}
          criteria={criteria}
          metUrl={metUrl}
          notMetUrl={notMetUrl}
          criteriaRequired={criteriaRequired}
          phase={phase}
        /> : "" }
    </div>
  )
  // there will be a link generated based on an if statement that will either link to next phase/condition or restart same condition with updated block code in the link...
}

export default Namts
