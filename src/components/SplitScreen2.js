import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/splitScreen2.css";
import '../css/button.css'

const SplitScreen2 = (props) => {



  return (
    <div id="container">
      <div className="top">
        <div className="sample-container">
          {/* {props.trials.length && trial <= props.maxTrials ?
            <img alt="os-sample" id="os-sample" className="os-sample" src={props.os} value={props.trials[i][1]} onClick={handleSampleClick} />
            : <div />} */}
        </div>
      </div>
      <div className="bottom">

        <div className="comparison-container">
          {/* {props.trials.length && sClick === 2 ?
            <>
              <img alt={props.trials[i][2]} src={props.trials[i][3]} className={props.trials[i][4]} value={props.trials[i][5]} onClick={handleComparisonClick} />
              <img alt={props.trials[i][6]} src={props.trials[i][7]} className={props.trials[i][8]} value={props.trials[i][9]} onClick={handleComparisonClick} />
            </>
            :
            <div />
          } */}

          {/* {props.criteriaRequired === "false" && trial === props.maxTrials
            ?
            <Link id="link-no-criteria" onClick={() => { window.location.href = props.metUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
            : props.criteriaRequired === "true" && trial - 1 === props.maxTrials && corrects === props.criteria
              ? <Link id="link-criteria-met" onClick={() => { window.location.href = props.metUrl }}><button type="button" id="btn" className="btn" >Next Task</button></Link>
              : props.criteriaRequired === "true" && trial - 1 === props.maxTrials && corrects < props.criteria
                ? <Link id="link-criteria-notmet" onClick={() => { window.location.href = props.notMetUrl }}><button type="button" id="btn" className="btn">Next Task</button></Link>
                :
                <></>
          } */}
        </div>
      </div>
    </div>
  )
}

export default SplitScreen2
