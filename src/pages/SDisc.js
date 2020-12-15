import React, { useState, useEffect } from 'react'
import SdModel from '../models/sd'
import SplitScreen2 from '../components/SplitScreen2'
import Counter from '../components/Counter'

const SDisc = (props) => {
  const [phase] = useState('sdisc')
  const [block] = useState(parseInt(props.match.params.block))
  const [count, setCount] = useState(0)
  const [os, setOs] = useState()
  const [trials, setTrials] = useState()
  const [maxTrials, setMaxTrials] = useState()
  const [criteria, setCriteria] = useState()
  const [criteriaRequired] = useState("true")
  const [metUrl, setMetUrl] = useState()
  const [notMetUrl, setNotMetUrl] = useState()

  const fetchStimuli = () => {
    SdModel.stimuli().then((data) => {
      console.log(data.sd)
      const tempOs = require(`../stimuli/${data.sd.observingStim.imagePath}`).default
      setOs(tempOs)
      setCriteria(data.sd.trials.length)
      setMaxTrials(data.sd.trials.length)
      // constructs the trials array for rendering
      const megaStimulusBank = []
      for (let i = 0; i < data.sd.trials.length; i++) {
        const temp = []
        const trialCode = data.sd.trials[i][0].trialCode
        temp.push(trialCode)
        for (let j = 1; j < data.sd.trials[i].length; j++) {
          let color = data.sd.trials[i][j].color
          temp.push(color)
          let comparison = require(`../stimuli/${data.sd.trials[i][j].imagePath}`).default
          temp.push(comparison)
          let position = data.sd.trials[i][j].class
          temp.push(position)
          let value = data.sd.trials[i][j].value
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
    //set met/notmet URL here
    //met goes to tsf post test
    //unmet goes back to SP


  }
  useEffect(() => { fetchStimuli() }, [])

  console.log("~~~~~~~~~~~~~~~~~~~~~~~", trials)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", os)

  return (
    <div>
      <Counter count={count} />
      <SplitScreen2
        setCount={setCount}
        os={os}
        trials={trials}
        block={block}
        maxTrials={maxTrials}
        criteria={criteria}
        phase={phase}
        criteriaRequired={criteriaRequired}
      />
    </div>
  )
}



export default SDisc
