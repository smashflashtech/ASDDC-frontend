import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/splitScreen.css";


const SplitScreen = (props) => {
  console.log("are we in bidness", props.trials)
  console.log("post this to the db: ", props.block)
  console.log("use this to determine if trials are done: ", props.maxTrials)
  console.log("heres the OS: ", props.os)
  const [i, setI] = useState(0)




  return (
    <div id="container">
      <div className="top">
        <div className="sample-container">
          {props.trials.length ?
            <img className="os-sample" src={props.trials[i][0]} value={props.trials[i][1]} />
            : <div/>}
        </div>
      </div>
      <div className="bottom">
        <div className="comparison-container">
          {props.trials.length ?
            <>
              <img src={props.trials[i][2]} className={props.trials[i][3]} value={props.trials[i][4]} />
              <img src={props.trials[i][5]} className={props.trials[i][6]} value={props.trials[i][7]} />
              <img src={props.trials[i][8]} className={props.trials[i][9]} value={props.trials[i][10]} />
            </>
            :
            <div/>
            }
        </div>
      </div>
    </div>
    // there will be a link generated based on an if statement that will either reset page or send to the next phase
  )
}

export default SplitScreen
