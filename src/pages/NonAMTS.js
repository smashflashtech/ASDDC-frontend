import React, { useState, useEffect } from 'react'
import NonamtsModel from '../models/nonamts'

const NonAMTS = (props) => {
  const [set, setSet] = useState(props.match.params.set)
  const [instructions, setInstructions] = useState()
  const [os, setOs] = useState()
  const [sample, setSample] = useState()
  const [trials, setTrials] = useState()
  const [pretest, setPretest] = useState()
  const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    NonamtsModel.stimuli(set).then((data)=>{
      console.log(data.namts)
      //constructs the image path string
      // setSample(require(`../stimuli/${data.dct.trials[0][0].imagePath}`).default)

      // //these need to be passed as props
      // setInstructions(data.dct.instructions)
      // setOs(data.dct.observingStim)
      // setTrials(data.dct.trials)
      // setPretest(data.dct.masteryCriterion.preTest.percentage)
      // setPostest(data.dct.masteryCriterion.postTest.percentage)
      })
  }

  useEffect( () => { fetchStimuli() },[])


  return (
    <div>
      
    </div>
  )
}

export default NonAMTS
