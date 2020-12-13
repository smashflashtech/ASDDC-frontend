import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeModel from '../models/home'
import '../css/home.css'

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
      <h1>Developer Navigation</h1><br/>
      <h2>Help me graduate.</h2>
      <h4><u>Response:</u> {response}</h4><br/>


      <h3>Researcher Tools:</h3>
      <ul className="home-list">
        <li><Link to="/urlconstructor">UrlConstructor</Link></li>
        <li><Link to="/particpant/1">Participant ONE Info</Link></li>
      </ul>

      <h3>Welcome Pages</h3>
      <ul className="home-list">
        <li><Link to="/1/1/A/1">Group 1 (MET) - dyad 1</Link></li>
        <li><Link to="/1/1/A/2">Group 1 (MET) - dyad 2</Link></li>
        <li><Link to="/2/1/I/1">Group 2 (EVOT) - dyad 1</Link></li>
        <li><Link to="/2/1/I/2">Group 2 (EVOT) - dyad 2</Link></li>
        <li><Link to="/3/1/Q/1">Group 3 (PSVOT) - dyad 1</Link></li>
        <li><Link to="/3/1/Q/2">Group 3 (PSVOT) - dyad 2</Link></li>
      </ul>

      <h3>Conditions</h3>
      <ol>
        <li><Link to="/dct/pre/1">DCT-pre1</Link></li>
        <li><Link to="/dct/pre/2">DCT-pre2</Link></li>
        <li><Link to="/dct/pre/3">DCT-pre3</Link></li>
        <li><Link to="/dct/post/1">DCT-post1</Link></li>
        <li><Link to="/dct/post/2">DCT-post2</Link></li>
        <li><Link to="/dct/post/3">DCT-post3</Link></li>
        <li><Link to="/tp/pre">TactProbe-pre</Link></li>
        <li><Link to="/tp/post">TactProbe-post</Link></li>
        <li><Link to="/tsf/pre">Tsf-pre</Link></li>
        <li><Link to="/tsf/post">Tsf-post</Link></li>
        <li>Non-Arbitrary MTS
          <ul className="home-list">
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
      <ul className="home-list">
        <ul className="home-list">
          <li><Link to="/instructions/amts/Z/Z">amts</Link></li>
          <li><Link to="/instructions/dct/pre/1">dct-pre - block 1</Link></li>
          <li><Link to="/instructions/evotiv/Z/Z">evotiv</Link></li>
          <li><Link to="/instructions/evott/Z/Z">evott</Link></li>
          <li><Link to="/instructions/namts/101/1">namts - set A - block 1</Link></li>
          <li><Link to="/instructions/npst/Z/Z">npst</Link></li>
          <li><Link to="/instructions/psvotiv/Z/Z">psvotiv</Link></li>
          <li><Link to="/instructions/psvotps/Z/Z">psvotps</Link></li>
          <li><Link to="/instructions/psvott/Z/Z">psvott</Link></li>
          <li><Link to="/instructions/sdisc/Z/Z">sdisc</Link></li>
          <li><Link to="/instructions/spair/Z/Z">spair</Link></li>
          <li><Link to="/instructions/tat/Z/Z">tat</Link></li>
          <li><Link to="/instructions/tp/Z/Z">tp</Link></li>
          <li><Link to="/instructions/tsf/Z/Z">tsf</Link></li>
        </ul>
      </ul>
    </div>
  )
}

export default Home
