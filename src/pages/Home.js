import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeModel from '../models/home'

const Home = () => {
  const [response, setResponse] = useState("")

  const fetchTest = () => {
    HomeModel.test().then((testData) => {
      console.log(testData.message.info)
      setResponse(testData.message.butReally)
    })
  }

  useEffect(() => { fetchTest() }, [])




  return (
    <div>
      <h1>Help me graduate.</h1>
      <h4>Response: {response}</h4>


      <h3>Researcher Tools:</h3>
      <ul>
        <li><Link to="/urlconstructor">UrlConstructor</Link></li>
        <li><Link to="/particpant/1">Participant ONE Info</Link></li>
      </ul>

      <h3>Conditions</h3>
      <ol>
        <li><Link to="/dct/pre">DCT-pre</Link></li>
        <li><Link to="/dct/post">DCT-post</Link></li>
        <li><Link to="/tp/pre">TactProbe-pre</Link></li>
        <li><Link to="/tp/post">TactProbe-post</Link></li>
        <li><Link to="/tsf/pre">Tsf-pre</Link></li>
        <li><Link to="/tsf/post">Tsf-post</Link></li>
        <li>Non-Arbitrary MTS
          <ul>
            <li><Link to="/namts/101/1">NAMTS - SET A</Link></li>
            <li><Link to="/namts/102/1">NAMTS - SET B</Link></li>
            <li><Link to="/namts/103/1">NAMTS - SET C</Link></li>
            <li><Link to="/namts/104/1">NAMTS - SET D</Link></li>
            <li><Link to="/namts/105/1">NAMTS - SET E</Link></li>
            <li><Link to="/namts/106/1">NAMTS - SET F</Link></li>
            <li><Link to="/namts/107/1">NAMTS - SET G</Link></li>
            <li><Link to="/namts/108/1">NAMTS - SET H</Link></li>
            <li><Link to="/namts/109/1">NAMTS - SET I</Link></li>
            <li><Link to="/namts/110/1">NAMTS - SET J</Link></li>
            <li><Link to="/namts/111/1">NAMTS - SET K</Link></li>
            <li><Link to="/namts/112/1">NAMTS - SET L</Link></li>
            <li><Link to="/namts/113/1">NAMTS - SET M</Link></li>
            <li><Link to="/namts/114/1">NAMTS - SET N</Link></li>
            <li><Link to="/namts/125/1">NAMTS - SET O</Link></li>
          </ul>
        </li>
        <li><Link to="/amts/1">Arbitrary MTS</Link></li>
        <li><Link to="/tat/1">Tat</Link></li>
        <li><Link to="/spair/1">SPair</Link></li>
        <li><Link to="/sdisc/1">SDisc</Link></li>
        <li><Link to="/evott/1">Evot T</Link></li>
        <li><Link to="/evotiv/1">Evot IV</Link></li>
        <li><Link to="/psvott/1">Psvot T</Link></li>
        <li><Link to="/psvotiv/1">Psvot IV</Link></li>
        <li><Link to="/psvotps/1">Psvot PS</Link></li>
        <li><Link to="/npst/1">Novel PST</Link></li>
        <li><Link to="/exitsurvey">ExitSurvey</Link></li>
      </ol>
      <h3>Instructions:</h3>
      <ul>
        <ul>
          <li><Link to="/instructions/amts/Z">amts</Link></li>
          <li><Link to="/instructions/dct/Z">dct</Link></li>
          <li><Link to="/instructions/evotiv/Z">evotiv</Link></li>
          <li><Link to="/instructions/evott/Z">evott</Link></li>
          <li><Link to="/instructions/namts/A">namts</Link></li>
          <li><Link to="/instructions/npst/Z">npst</Link></li>
          <li><Link to="/instructions/psvotiv/Z">psvotiv</Link></li>
          <li><Link to="/instructions/psvotps/Z">psvotps</Link></li>
          <li><Link to="/instructions/psvott/Z">psvott</Link></li>
          <li><Link to="/instructions/sdisc/Z">sdisc</Link></li>
          <li><Link to="/instructions/spair/Z">spair</Link></li>
          <li><Link to="/instructions/tat/Z">tat</Link></li>
          <li><Link to="/instructions/tp/Z">tp</Link></li>
          <li><Link to="/instructions/tsf/Z">tsf</Link></li>
        </ul>
      </ul>
    </div>
  )
}

export default Home
