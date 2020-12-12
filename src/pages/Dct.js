import React, { useState, useEffect } from 'react'
import DctModel from '../models/dct'
import SplitScreen from '../components/SplitScreen'

const Dct = () => {
  const [instructions, setInstructions] = useState()
  const [os, setOs] = useState()
  const [sample, setSample] = useState()
  const [trials, setTrials] = useState()
  const [pretest, setPretest] = useState()
  const [posttest, setPostest] = useState()

  const fetchStimuli=() => {
    DctModel.stimuli().then((data)=>{
      console.log(data.dct)
      //constructs the image path string
      setSample(require(`../stimuli/${data.dct.trials[0][0].imagePath}`).default)

      //these need to be passed as props
      setInstructions(data.dct.instructions)
      setOs(data.dct.observingStim)
      setTrials(data.dct.trials)
      setPretest(data.dct.masteryCriterion.preTest.percentage)
      setPostest(data.dct.masteryCriterion.postTest.percentage)
      })
  }

  useEffect( () => { fetchStimuli() },[])

  //THIS IS LIKELY GOING TO BE PASS DOWN TO COMPONENTS WHEN YOU WORK IT OUT
  return (
    <div>
      {/* { sample !== undefined ? <img src= { sample } /> : "" }
      <img src= {orange} /> */}
      {console.log(os)}
      { os !== undefined ? <SplitScreen os={os} /> : "" } 
    </div>
  )
}

export default Dct
