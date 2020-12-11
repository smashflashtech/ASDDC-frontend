import React, { useState, useEffect } from 'react'
import PsvotivModel from '../models/psvotiv'

const PsvotIV = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  // const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  // const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    PsvotivModel.stimuli().then((data)=>{
      
      //constructs the image path string
      // setComparison(require(`../stimuli/${data.psvotiv.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.psvotiv.instructions)
      // setOs(data.psvotiv.observingStim)
      // setTrials(data.psvotiv.trials)
      // setPretest(data.psvotiv.masteryCriterion.preTest.percentage)
      // setPostest(data.psvotiv.masteryCriterion.postTest.percentage)
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

export default PsvotIV
