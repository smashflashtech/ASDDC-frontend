import React, { useState, useEffect } from 'react'
import NonamtsModel from '../models/nonamts'

const NonAMTS = (props) => {
  const [comparison, setComparison] = useState()
  const [set, setSet] = useState(props.match.params.set)
  const [instructions, setInstructions] = useState()
  const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    NonamtsModel.stimuli(set).then((data)=>{
      
      //constructs the image path string
      setComparison(require(`../stimuli/${data.namts.trials[0][1].imagePath}`).default)

      // //these need to be passed as props
      setInstructions(data.namts.instructions)
      setOs(data.namts.observingStim)
      setTrials(data.namts.trials)
      // setPretest(data.namts.masteryCriterion.preTest.percentage)
      // setPostest(data.namts.masteryCriterion.postTest.percentage)
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

export default NonAMTS
