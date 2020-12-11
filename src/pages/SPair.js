import React, { useState, useEffect } from 'react'
import SpModel from '../models/sp'

const SPair = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    SpModel.stimuli().then((data)=>{
      console.log(data.sp.trials)
      //constructs the image path string
      setComparison(require(`../stimuli/${data.sp.trials[0].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.sp.instructions)
      setOs(data.sp.observingStim)
      setTrials(data.sp.trials)
      // setPretest(data.sp.masteryCriterion.preTest.percentage)
      // setPostest(data.sp.masteryCriterion.postTest.percentage)
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

export default SPair
