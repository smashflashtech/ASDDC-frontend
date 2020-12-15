import React, { useState, useEffect } from 'react'
import SplitScreenSp from '../components/SplitScreenSp'
import SpModel from '../models/sp'
import Counter from '../components/Counter'

const SPair = () => {
  const [count, setCount] = useState(0)
  const [os, setOs] = useState()
  // const [sample, setSample] = useState()
  const [trials, setTrials] = useState()
  // const [pretest, setPretest] = useState() //criteria not yet added to json file on the backend
  // const [posttest, setPostest] = useState()

  const fetchStimuli = () => {
    SpModel.stimuli().then((data) => {
      console.log(data.sp)

    })
  }
  useEffect(() => { fetchStimuli() }, [])

  console.log("~~~~~~~~~~~~~~~~~~~~~~~", trials)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~", os)


  return (
    <div>
      <Counter count={count} />
      <SplitScreenSp
        setCount={setCount}
        count={count}

      />
    </div>
  )
}

export default SPair
