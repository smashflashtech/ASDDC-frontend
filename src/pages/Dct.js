import React, { useState, useEffect } from 'react'
import DctModel from '../models/dct'
import SplitScreen from '../components/SplitScreen'

const Dct = () => {
  const [trials, setTrials] = useState()

  const [os, setOs] = useState()
  const [samplePath, setSamplePath] = useState()
  const [pretest, setPretest] = useState()
  const [posttest, setPostest] = useState()

  const fetchStimuli =() => {
    DctModel.stimuli().then((data)=>{
      // console.log(data.dct)
      //constructs the image path string
      const megaStimulusBank = []
      for (let i = 0; i < data.dct.trials.length; i++) {
        const temp = []
        const sample = require(`../stimuli/${data.dct.trials[i][0].imagePath}`).default
        temp.push(sample)
        for(let j = 1; j < data.dct.trials[i].length; j++) {
          let comparison = require(`../stimuli/${data.dct.trials[i][j].imagePath}`).default
          temp.push(comparison)
          let position = data.dct.trials[i][j].class
          temp.push(position)
        }
        // const comparison1 = require(`../stimuli/${data.dct.trials[i][1].imagePath}`).default
        // const comparison2 = require(`../stimuli/${data.dct.trials[i][2].imagePath}`).default
        // const comparison3 = require(`../stimuli/${data.dct.trials[i][3].imagePath}`).default
        // const position1 = data.dct.trials[i][1].class
        // const position2 = data.dct.trials[i][2].class
        // const position3 = data.dct.trials[i][3].class
        // temp.push(comparison1)
        // temp.push(comparison2)
        // temp.push(comparison3)
        // temp.push(position1)
        // temp.push(position2)
        // temp.push(position3)
        megaStimulusBank.push(temp)
      }
      setTrials(megaStimulusBank)
      // data.dct.trials


      //these need to be passed as props
      setOs(data.dct.observingStim)
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
      { console.log(trials)}
      { os !== undefined ? <SplitScreen os={os} trials={trials} trials={trials}/> : "" } 
    </div>
  )
}

export default Dct
