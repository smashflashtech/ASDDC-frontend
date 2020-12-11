import React, { useState, useEffect } from 'react'
import PsvottModel from '../models/psvott'

const Psvott = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  // const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  // const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    PsvottModel.stimuli().then((data)=>{
      
      //constructs the image path string
      // setComparison(require(`../stimuli/${data.psvott.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.psvott.instructions)
      // setOs(data.psvott.observingStim)
      // setTrials(data.psvott.trials)
      // setPretest(data.psvott.masteryCriterion.preTest.percentage)
      // setPostest(data.psvott.masteryCriterion.postTest.percentage)
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


export default Psvott
