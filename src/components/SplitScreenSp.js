import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/splitScreenSp.css'

const SplitScreenSp = () => {
  return (
    <div id="container-sp">
      <div className="top-sp">
        <div className="sample-container-sp">
          {/* {props.trials.length && trial <= props.maxTrials ?
            <img alt="os-sample" id="os-sample" className="os-sample" src={props.os} value={props.trials[i][0]} onClick={handleSampleClick} />
            : <div />} */}
        </div>
      </div>
      <div className="bottom-sp">

        <div className="comparison-container-sp">
          {/* {props.trials.length && sClick === 1 ?
            <>
              <img alt={props.trials[i][1]} src={props.trials[i][2]} className={props.trials[i][3]} value={props.trials[i][4]} onClick={handleComparisonClick} />
              <img alt={props.trials[i][5]} src={props.trials[i][6]} className={props.trials[i][7]} value={props.trials[i][8]} onClick={handleComparisonClick} />
            </>
            :
            <div />
          } */}

          {/* { trial > props.maxTrials && props.criteriaRequired === "false" ?
            <Link id="link-criteria-met" onClick={() => { window.location.href = props.metUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
            : trial > props.maxTrials && corrects === criteria ? 
            <Link id="link-criteria-met" onClick={() => { window.location.href = props.metUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
            : trial > props.maxTrials && corrects < criteria ?
            <Link id="link-criteria-notmet" onClick={() => { window.location.href = props.notMetUrl }}><button type="button" id="btn" className="btn">Next Task</button></Link>
            :
            <></>
          } */}
        </div>
      </div>
    </div>
  )
}

export default SplitScreenSp
