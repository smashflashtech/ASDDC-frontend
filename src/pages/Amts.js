import React, { useState, useEffect } from 'react'
import AmtsModel from '../models/amts'

const Amts = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    AmtsModel.stimuli().then((data)=>{
      
      //constructs the image path string
      setComparison(require(`../stimuli/${data.amts.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.amts.instructions)
      setOs(data.amts.observingStim)
      setTrials(data.amts.trials)
      // setPretest(data.amts.masteryCriterion.preTest.percentage)
      // setPostest(data.amts.masteryCriterion.postTest.percentage)
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


export default Amts
