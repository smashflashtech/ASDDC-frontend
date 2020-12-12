import React, { useState, useEffect } from 'react'
import DctModel from '../models/dct'
import SplitScreen from '../components/SplitScreen'

const Dct = () => {
  const [os, setOs] = useState()
  const [samplePath, setSamplePath] = useState()
  const [trials, setTrials] = useState()
  const [pretest, setPretest] = useState()
  const [posttest, setPostest] = useState()

  const fetchStimuli =() => {
    DctModel.stimuli().then((data)=>{
      // console.log(data.dct)
      //constructs the image path string


      //these need to be passed as props
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
      { console.log(samplePath)}
      { os !== undefined ? <SplitScreen os={os} trials={trials}/> : "" } 
    </div>
  )
}

export default Dct
