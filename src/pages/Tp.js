import React, { useState, useEffect } from 'react'

import TpModel from '../models/tp'

const Tp = () => {
  const [comparison, setComparison] = useState()
  const [instructions, setInstructions] = useState()
  // const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  // const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli = () => {
    TpModel.stimuli().then((data) => {

      //constructs the image path string
      // setComparison(require(`../stimuli/${data.tp.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.tp.instructions)
      // setOs(data.tp.observingStim)
      // setTrials(data.tp.trials)
      // setPretest(data.tp.masteryCriterion.preTest.percentage)
      // setPostest(data.tp.masteryCriterion.postTest.percentage)
    })
  }
  useEffect(() => { fetchStimuli() }, [])

  // console.log("~~~~~~~~~~~~~~~~~~~~~~~", trials)
  // console.log("~~~~~~~~~~~~~~~~~~~~~~~", os)
  //console.log("~~~~~~~~~~~~~~~~~~~~~~~", instructions)

  return (
    <div>

    </div>
  )
}

export default Tp
