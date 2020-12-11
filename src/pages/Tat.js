import React, { useState, useEffect } from 'react'
import TatModel from '../models/tat'

const Tat = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  // const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  // const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    TatModel.stimuli().then((data)=>{
      
      //constructs the image path string
      // setComparison(require(`../stimuli/${data.tat.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.tat.instructions)
      // setOs(data.tat.observingStim)
      // setTrials(data.tat.trials)
      // setPretest(data.tat.masteryCriterion.preTest.percentage)
      // setPostest(data.tat.masteryCriterion.postTest.percentage)
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

export default Tat
