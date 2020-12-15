import React, { useState, useEffect } from 'react'
import SplitScreenSp from '../components/SplitScreenSp'
import SpModel from '../models/sp'
import Counter from '../components/Counter'

const SPair = (props) => {
  const [count, setCount] = useState(0)
  const [phase] = useState('spair')
  const [block] = useState(parseInt(props.match.params.block))
  const [os, setOs] = useState()
  const [trials, setTrials] = useState([])
  const [maxTrials, setMaxTrials] = useState()
  const [criteria, setCriteria] = useState()
  const [criteriaRequired] = useState("true")
  const [metUrl, setMetUrl] = useState()
  const [notMetUrl, setNotMetUrl] = useState()

  const fetchStimuli = () => {
    SpModel.stimuli().then((data) => {
      console.log(data.sp)
      const tempOs = require(`../stimuli/${data.sp.observingStim.imagePath}`).default
      setOs(tempOs)
      setCriteria(data.sp.trials.length)
      setMaxTrials(data.sp.trials.length)
      // constructs the trials array for rendering
      let megaStimulusBank = []
      for (let i = 0; i < data.sp.trials.length; i++) {
        let temp = []
        let trialCode = data.sp.trials[i].trialCode
        temp.push(trialCode)
        let comparison = require(`../stimuli/${data.sp.trials[i].imagePath}`).default
        temp.push(comparison)
        let value = data.sp.trials[i].value
        temp.push(value)
        megaStimulusBank.push(temp)
      }
      for (let k = 0; k < megaStimulusBank.length; k++) {                                       //SHUFFLES THE ARRAY
        let l = Math.floor(Math.random() * megaStimulusBank.length);
        let temp = megaStimulusBank[k];
        megaStimulusBank[k] = megaStimulusBank[l];
        megaStimulusBank[l] = temp;
      }
      setTrials(megaStimulusBank)
    })
    localStorage.setItem('spair', block)
    setMetUrl('/sdiscs/1')
    setNotMetUrl(`/spair/${block + 1}`)
  }
  useEffect(() => { fetchStimuli() }, [])


  return (
    <div>
      <Counter count={count} />
      { trials.length !== undefined ?
      <SplitScreenSp
        setCount={setCount}
        count={count}
        condition={"tr"}
        os={os}
        trials={trials}
        block={block}
        maxTrials={maxTrials}
        criteria={criteria}
        phase={phase}
        criteriaRequired={criteriaRequired}
        metUrl={metUrl}
        notMetUrl={notMetUrl}
      /> : ""}
    </div>
  )
}

export default SPair
