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
      <h3>Instructions:</h3>
      <ul>
        <ul>
          <li><Link to="/instructions/amts/0">amts</Link></li>
          <li><Link to="/instructions/dct/0">dct</Link></li>
          <li><Link to="/instructions/evotiv/0">evotiv</Link></li>
          <li><Link to="/instructions/evott/0">evott</Link></li>
          <li><Link to="/instructions/namts/A">namts</Link></li>
          <li><Link to="/instructions/npst/0">npst</Link></li>
          <li><Link to="/instructions/psvotiv/0">psvotiv</Link></li>
          <li><Link to="/instructions/psvotps/0">psvotps</Link></li>
          <li><Link to="/instructions/psvott/0">psvott</Link></li>
          <li><Link to="/instructions/sdisc/0">sdisc</Link></li>
          <li><Link to="/instructions/spair/0">spair</Link></li>
          <li><Link to="/instructions/tat/0">tat</Link></li>
          <li><Link to="/instructions/tp/0">tp</Link></li>
          <li><Link to="/instructions/tsf/0">tsf</Link></li>
        </ul>
      </ul>
      <h3>Conditions</h3>
      <ol>
        <li><Link to="/dct">DCT</Link></li>
        <li><Link to="/tp">TactProbe</Link></li>
        <li><Link to="/tsf">Tsf</Link></li>
        <li>Non-Arbitrary MTS
          <ul>
            <li><Link to="/namts/A">NAMTS - SET A</Link></li>
            <li><Link to="/namts/B">NAMTS - SET B</Link></li>
            <li><Link to="/namts/C">NAMTS - SET C</Link></li>
            <li><Link to="/namts/D">NAMTS - SET D</Link></li>
            <li><Link to="/namts/E">NAMTS - SET E</Link></li>
            <li><Link to="/namts/F">NAMTS - SET F</Link></li>
            <li><Link to="/namts/G">NAMTS - SET G</Link></li>
            <li><Link to="/namts/H">NAMTS - SET H</Link></li>
            <li><Link to="/namts/I">NAMTS - SET I</Link></li>
            <li><Link to="/namts/J">NAMTS - SET J</Link></li>
            <li><Link to="/namts/K">NAMTS - SET K</Link></li>
            <li><Link to="/namts/L">NAMTS - SET L</Link></li>
            <li><Link to="/namts/M">NAMTS - SET M</Link></li>
            <li><Link to="/namts/N">NAMTS - SET N</Link></li>
            <li><Link to="/namts/O">NAMTS - SET O</Link></li>
          </ul>
        </li>
        <li><Link to="/amts">Arbitrary MTS</Link></li>
        <li><Link to="/tat">Tat</Link></li>
        <li><Link to="/spair">SPair</Link></li>
        <li><Link to="/sdisc">SDisc</Link></li>
        <li><Link to="/evott">Evot T</Link></li>
        <li><Link to="/evotiv">Evot IV</Link></li>
        <li><Link to="/psvott">Psvot T</Link></li>
        <li><Link to="/psvotiv">Psvot IV</Link></li>
        <li><Link to="/psvotps">Psvot PS</Link></li>
        <li><Link to="/npst">Novel PST</Link></li>
        <li><Link to="/exitsurvey">ExitSurvey</Link></li>
      </ol>
    </div>
  )
}

export default Home
