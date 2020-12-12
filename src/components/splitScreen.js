import React, { useState, useEffect } from 'react'
import "../css/splitScreen.css";


const SplitScreen = (props) => {
  const [trials, setTrials] = useState([])
  const [src, setSrc] = useState(require(`../stimuli/${props.os.imagePath}`).default)

  //these are set on a trial by trial basis
  //phase trackinig logic
  const [block, setBlock] = useState(1)
  const [trial, setTrial] = useState(1)
  const [totalTrials] = useState(props.trials.length)
  const [corrects, setCorrects] = useState(0)
  const [criteria, setCriteria] = useState() //NEED TO CHECK THIS LATER
  
  const [clickCounter, setClickCounter] = useState(0)
  const [i, setI] = useState(0)
  const [samplePath, setSamplePath] = useState(props.trials[i][0])

  return (
    <div id="container">
      <div class="top">
        <div class="sample-container">
          {/* <img class="os-sample" src={src} /> */}
          <img class="os-sample" src={samplePath} value={props.trials[i][1]}/>
        </div>
      </div>
      <div class="bottom">
        <div class="comparison-container">
          <img src={props.trials[i][2]} class={props.trials[i][3]} value={props.trials[i][4]}/>
          <img src={props.trials[i][5]} class={props.trials[i][6]} value={props.trials[i][7]}/>
          <img src={props.trials[i][8]} class={props.trials[i][9]} value={props.trials[i][10]}/>
        </div>
      </div>
    </div>
  )
}

export default SplitScreen
