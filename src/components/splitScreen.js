import React from 'react'
import "../css/splitScreen.css";
import SampleDisplay from '../components/SampleDisplay'
import ComparisonDisplay from '../components/ComparisonDisplay'

const SplitScreen = (props) => {
  console.log (props)
  return (
    <div id="container">
      <div class="top">
        <SampleDisplay os={props.os}/>
      </div>
      <div class="bottom">
      <ComparisonDisplay/>
      </div>
    </div>
  )
}

export default SplitScreen
