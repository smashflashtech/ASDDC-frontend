import React, { useState, useEffect } from 'react'
import NpstModel from '../models/npst'

const NovelPST = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  // const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  // const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    NpstModel.stimuli().then((data)=>{
      
      //constructs the image path string
      // setComparison(require(`../stimuli/${data.npst.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.npst.instructions)
      // setOs(data.npst.observingStim)
      // setTrials(data.npst.trials)
      // setPretest(data.npst.masteryCriterion.preTest.percentage)
      // setPostest(data.npst.masteryCriterion.postTest.percentage)
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

export default NovelPST
