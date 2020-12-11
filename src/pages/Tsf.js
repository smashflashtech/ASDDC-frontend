import React, { useState, useEffect } from 'react'
import TsfModel from '../models/tsf'

const Tsf = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    TsfModel.stimuli().then((data)=>{
      
      //constructs the image path string
      setComparison(require(`../stimuli/${data.tsf.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.tsf.instructions)
      setOs(data.tsf.observingStim)
      setTrials(data.tsf.trials)
      // setPretest(data.tsf.masteryCriterion.preTest.percentage)
      // setPostest(data.tsf.masteryCriterion.postTest.percentage)
      })
  }
  useEffect( () => { fetchStimuli() },[])
  
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", trials)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", os)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", instructions)

  return (
    <div>
            { comparison !== undefined ? <img src= { comparison } /> : "" }
    </div>
  )
}

export default Tsf
