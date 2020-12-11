import React, { useState, useEffect } from 'react'
import EvotivModel from '../models/evotiv'

const Evotiv = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  // const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  // const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    EvotivModel.stimuli().then((data)=>{
      
      //constructs the image path string
      // setComparison(require(`../stimuli/${data.evotiv.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.evotiv.instructions)
      // setOs(data.evotiv.observingStim)
      // setTrials(data.evotiv.trials)
      // setPretest(data.evotiv.masteryCriterion.preTest.percentage)
      // setPostest(data.evotiv.masteryCriterion.postTest.percentage)
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
export default Evotiv
