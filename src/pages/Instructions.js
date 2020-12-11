import React, { useState, useEffect } from 'react'
import InstructionsModel from '../models/instructions'

const Instructions = (props) => {
  const [instructions, setInstructions] = useState()
  const [phaseName] = useState(props.match.params.phase)

  const fetchStimuli = () => {
    console.log(phaseName)
    InstructionsModel.stimuli(phaseName).then((data) => {
      setInstructions(data.instructions[0])
    })
  }

  useEffect(() => { fetchStimuli() }, [])

  return (
    <div>
      INSTRUCTIONS: {instructions}
    </div>
  )
}

export default Instructions
