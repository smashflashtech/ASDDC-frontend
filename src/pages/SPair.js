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
        let color = data.sp.trials[i].color
        temp.push(color)
        megaStimulusBank.push(temp)
      }
      setTrials(megaStimulusBank)
    })
    localStorage.setItem('spair', block)
    setMetUrl('http://localhost:3000/instructions/sdisc/Z')
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
