import React, { useState, useEffect } from 'react'
import PsvotpsModel from '../models/psvotps'

const Psvotps = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  // const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  // const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    PsvotpsModel.stimuli().then((data)=>{
      
      //constructs the image path string
      // setComparison(require(`../stimuli/${data.psvotps.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.psvotps.instructions)
      // setOs(data.psvotps.observingStim)
      // setTrials(data.psvotps.trials)
      // setPretest(data.psvotps.masteryCriterion.preTest.percentage)
      // setPostest(data.psvotps.masteryCriterion.postTest.percentage)
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

export default Psvotps
