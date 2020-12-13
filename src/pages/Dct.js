import React, { useState, useEffect } from 'react'
import DctModel from '../models/dct'
import SplitScreen from '../components/SplitScreen'

const Dct = (props) => {
  const [trials, setTrials] = useState([])

  const [os, setOs] = useState()
  const [block, setBlock] = useState()
  const [maxTrials, setMaxTrials] = useState()

  const fetchStimuli =() => {
    DctModel.stimuli().then((data)=>{
      console.log(data.dct)
      //Sets Observing stimuls
      const tempOs = require(`../stimuli/${data.dct.observingStim.imagePath}`).default
      setOs(tempOs)
      setMaxTrials(data.dct.trials.length)
      // constructs the image path string
      const megaStimulusBank = []
      for (let i = 0; i < data.dct.trials.length; i++) {
        const temp = []
        const sample = require(`../stimuli/${data.dct.trials[i][0].imagePath}`).default
        temp.push(sample)
        const trialCode = data.dct.trials[i][0].trialCode
        temp.push(trialCode)
        for(let j = 1; j < data.dct.trials[i].length; j++) {
          let comparison = require(`../stimuli/${data.dct.trials[i][j].imagePath}`).default
          temp.push(comparison)
          let position = data.dct.trials[i][j].class
          temp.push(position)
          let value = data.dct.trials[i][j].value
          temp.push(value)
        }
        megaStimulusBank.push(temp)
        for (let k = 0; k < megaStimulusBank.length; k++) {                                       //SHUFFLES THE ARRAY
          let l = Math.floor(Math.random() * megaStimulusBank.length);  
          let temp = megaStimulusBank[k]; 
          megaStimulusBank[k] = megaStimulusBank[l];
          megaStimulusBank[l] = temp;   
        }
      }
      setTrials(megaStimulusBank)


    //CONSTRUCT MET AND UNMET URLS
    })
  }
  

  useEffect( () => { fetchStimuli() },[])

  //THIS IS LIKELY GOING TO BE PASS DOWN TO COMPONENTS WHEN YOU WORK IT OUT
  return (
    <div>
      {/* { sample !== undefined ? <img src= { sample } /> : "" }
      <img src= {orange} /> */}
      { console.log("THIS IS STATE", block)}
      { console.log( trials)}
      { trials.length !== undefined ? 
      <SplitScreen 
        os={os} 
        trials={trials} 
        block={props.match.params.block}
        setBlock={setBlock}
        maxTrials={maxTrials}
      /> : "" } 
    </div>
  )
}

export default Dct
