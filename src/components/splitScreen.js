import React, { useState, useEffect } from 'react'
import "../css/splitScreen.css";


const SplitScreen = (props) => {
  const [trials, setTrials] = useState([])
  const [src, setSrc] = useState(require(`../stimuli/${props.os.imagePath}`).default)

  //these are set on a trial by trial basis
  const [samplePath, setSamplePath] = useState(props.trials[0])
  const [comparisonArray, setComparisonArray] = useState([])//constructor will set this as jsx
  //phase trackinig logic
  const [block, setBlock] = useState(1)
  const [trial, setTrial] = useState(1)
  // const [totalTrials] = useState(props.trials.length)
  const [corrects, setCorrects] = useState(0)
  const [criteria, setCriteria] = useState() //NEED TO CHECK THIS LATER

  const [clickCounter, setClickCounter] = useState(0)
  const [i, setI] = useState(0)


  // const stateSetup = () => {
  //   if (props !== undefined) {
  //     console.log(props.trials)
  //     setSrc(require(`../stimuli/${props.os.imagePath}`).default)
  //     setTrials(props.trials)
  //     setCriteria(12) // THIS NEEDS TO CHANGE LATER
  //   }
  // }
  
  
  // useEffect(() => { stateSetup() }, [])
  
  //this is where you need to scramble the the trials and send the specific sample and respeective comparison to the components
  
  //     setSamplePath(require(`../stimuli/${data.dct.trials[0][0].imagePath}`).default) // THIS IS WRONG THIS ISNT WHERE THE SAMPLE IS ASSIGNED
  


  // console.log("TRIALS?", trials)
  // console.log("COMPARISON ARRAY?", comparisonArray)



  return (
    <div id="container">
      <div class="top">
        <div class="sample-container">
          {/* <img class="os-sample" src={src} /> */}
          <img class="os-sample" src={props.trials[0][0]} />
        </div>
      </div>
      <div class="bottom">
        <div class="comparison-container">
        <img src={props.trials[0][1]} class={props.trials[0][2]} />
        <img src={props.trials[0][3]} class={props.trials[0][4]} />
        <img src={props.trials[0][5]} class={props.trials[0][6]} />
        </div>
      </div>
    </div>
  )
}

export default SplitScreen
