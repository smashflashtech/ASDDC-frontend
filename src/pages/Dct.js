import React, { useState, useEffect } from 'react'
import DctModel from '../models/dct'

const Dct = () => {
  const [dct, setDct] = useState()

  const fetchStimuli=() => {
    DctModel.stimuli().then((data)=>{
      console.log(data)
      setDct(data)
      })
  }

  useEffect( () => { fetchStimuli() },[])

  return (
    <div>
      
    </div>
  )
}

export default Dct
