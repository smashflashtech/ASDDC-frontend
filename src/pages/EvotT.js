import React, { useState, useEffect } from 'react'
import EvotTModel from '../models/evott'

const EvotT = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  // const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  // const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    EvotTModel.stimuli().then((data)=>{
      
      //constructs the image path string
      // setComparison(require(`../stimuli/${data.evott.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.evott.instructions)
      // setOs(data.evott.observingStim)
      // setTrials(data.evott.trials)
      // setPretest(data.evott.masteryCriterion.preTest.percentage)
      // setPostest(data.evott.masteryCriterion.postTest.percentage)
      })
  }
  useEffect( () => { fetchStimuli() },[])
  
  // console.log("~~~~~~~~~~~~~~~~~~~~~~~", trials)
  // console.log("~~~~~~~~~~~~~~~~~~~~~~~", os)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", instructions)

  return (
    <div>
      Instructions: {instructions}
            {/* { comparison !== undefined ? <img src= { comparison } /> : "" } */}
    </div>
  )
}

export default EvotT
