import React, { useState, useEffect } from 'react'
import HomeModel from '../models/home'

const Home = () => {
const [response, setResponse] = useState("")

  const fetchTest=() => {
    HomeModel.test().then((testData)=>{
      console.log(testData.message.info)
      setResponse(testData.message.butReally)
      })
  }

  useEffect( () => { fetchTest() },[])




  return (
    <div>
      <h4>Response: { response }</h4>
    </div>
  )
}

export default Home
