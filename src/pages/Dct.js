import React, { useState, useEffect } from 'react'
import DctModel from '../models/dct'
import SplitScreen3 from '../components/SplitScreen3'

const Dct = (props) => {
  const [dyadN] = useState(parseInt(localStorage.getItem('dyadN')))
  const [trials, setTrials] = useState([])

  const [os, setOs] = useState()
  const [block] = useState(parseInt(props.match.params.block))
  const [condition] = useState()
  const [maxTrials, setMaxTrials] = useState()
  const [criteria, setCriteria] = useState()
  const [metUrl, setMetUrl] = useState()

  const fetchStimuli = () => {
    DctModel.stimuli().then((data) => {
      console.log(data.dct)
      //Sets Observing stimuls
      const tempOs = require(`../stimuli/${data.dct.observingStim.imagePath}`).default
      setOs(tempOs)
      setCriteria(99)
      setMaxTrials(data.dct.trials.length)
      // constructs the image path string
      const megaStimulusBank = []
      for (let i = 0; i < data.dct.trials.length; i++) {
        const temp = []
        const sample = require(`../stimuli/${data.dct.trials[i][0].imagePath}`).default
        temp.push(sample)
        const trialCode = data.dct.trials[i][0].trialCode
        temp.push(trialCode)
        for (let j = 1; j < data.dct.trials[i].length; j++) {
          let color = data.dct.trials[i][j].color
          temp.push(color)
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
    })
    //CONSTRUCT MET AND UNMET URLS depending on dyad
    //if dyad = 1 and block = 1 move to namts OR dyad = 2 and block = 3 move to namts
    if (dyadN === 1) {
      setMetUrl('/instructions/namts/101')
    } else if (dyadN === 2 && block < 3) {
      setMetUrl(`/dct/pre/${block + 1}`)
    } else if (dyadN === 2 && block === 3) {
      setMetUrl('/instructions/namts/101')
    }
  }


  useEffect(() => { fetchStimuli() }, [])

  //THIS IS LIKELY GOING TO BE PASS DOWN TO COMPONENTS WHEN YOU WORK IT OUT
  return (
    <div>

      { console.log("THIS IS condition", condition)}
      { console.log(trials)}
      { trials.length !== undefined ?
        <SplitScreen3
          os={os}
          trials={trials}
          set={props.match.params.condition}
          block={block}
          maxTrials={maxTrials}
          criteria={criteria}
          metUrl={metUrl}
        /> : ""}
    </div>
  )
}

export default Dct
