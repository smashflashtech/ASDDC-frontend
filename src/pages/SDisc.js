import React, { useState, useEffect } from 'react'
import SdModel from '../models/sd'

const SDisc = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli = () => {
    SdModel.stimuli().then((data) => {
      console.log(data.sd.trials)
      //constructs the image path string
      setComparison(require(`../stimuli/${data.sd.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.sd.instructions)
      setOs(data.sd.observingStim)
      setTrials(data.sd.trials)
      // setPretest(data.sd.masteryCriterion.preTest.percentage)
      // setPostest(data.sd.masteryCriterion.postTest.percentage)
    })
  }
  useEffect(() => { fetchStimuli() }, [])

  console.log("~~~~~~~~~~~~~~~~~~~~~~~", trials)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", os)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", instructions)

  return (
    <div>
      { comparison !== undefined ? <img src={comparison} /> : ""}
    </div>
  )
}



export default SDisc
