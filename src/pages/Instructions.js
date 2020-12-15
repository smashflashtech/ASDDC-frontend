import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import InstructionsModel from '../models/instructions'

const Instructions = (props) => {
  const [instructions, setInstructions] = useState()
  const [phaseName] = useState(props.match.params.phase)
  const [set] = useState(props.match.params.set)

  console.log("~~~~~~~~", set)

  const fetchStimuli = () => {
    console.log(phaseName)
    InstructionsModel.stimuli(phaseName).then((data) => {
      setInstructions(data.instructions[0])
    })
  }

  useEffect(() => { fetchStimuli() }, [])
  
  let url = ""
  if (phaseName === "dct" || "tsf" || "namts"){
    url = `/${phaseName}/${set}/1`
  } else if (phaseName === "amts") {
    url = `/${phaseName}/1/${set}`
  } else {
    url = `/${phaseName}/1`
  }

  return (
    <div>
      INSTRUCTIONS: {instructions}
      <Link to={url}>Start ➡️</Link>
    </div>
  )
}

export default Instructions
