import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DeveloperModel from '../models/developer'
import '../css/developer.css'
import Feedback from '../components/Feedback'

const Developer = () => {
  const [response, setResponse] = useState("")

  const fetchTest = () => {
    DeveloperModel.test().then((testData) => {
      console.log(testData.message.info)
      setResponse(testData.message.butReally)
    })
  }

  useEffect(() => { fetchTest() }, [])

  const refreshNav = () => {
    if (localStorage.getItem('dev') === null) {
      localStorage.setItem('dev', 'on')
      window.location.reload()
    } else {
      localStorage.clear()
      window.location.reload()
    }
  }

  const resetLocalStorage = () =>{
    localStorage.clear()
  }

  const setFeedback =() => {
    localStorage.setItem('feedback', 'true')
  }
  const setNoFeedback =() => {
    localStorage.setItem('feedback', 'false')
  }

  const handleFeedback = (e) => {
    e.preventDefault()
    let selectedValue = e.target.getAttribute("value")
    feedback(selectedValue)
  }

  const feedback = (selectedValue) => {
    let feedback = localStorage.getItem('feedback')
    if (feedback === "false"){
      console.log("show them grayscreen")
      console.log("then call closeOverlay after 3 seconds")
    } else if (feedback === "true" && selectedValue === "correct"){
      console.log("show them fireworks")
      console.log("then call closeOverlay after 3 seconds")
    } else if (feedback === "true" && selectedValue === "incorrect"){
      console.log("show them blackscreen")
      console.log("then call closeOverlay after 3 seconds")
    }
  }

  return (
    <div className="dev-body">
      <h1 className="oswald">Developer Navigation<span className="tool-toggle" onClick={refreshNav}>🛠️</span><span className="dev-icon">◀️ </span><span className="dev-hint incon">click to toggle dev navigation</span></h1>
      <h2 className="incon">Help me graduate.</h2>
      <div className="r-test-container"><p className="response-test"><span className="oswald dev-title">Response:</span> <span className="incon">{response}</span></p><br /></div>


      <div className="dev-top-container">
        <div className="dev-r-tools">
          <h3 className="oswald">Researcher Tools:</h3>
          <ul className="dev home-list">
            <li><Link className="incon dev-link" to="/">Home</Link></li>
            <li><Link className="incon dev-link" to="/urlconstructor">UrlConstructor</Link></li>
            <li><Link className="incon dev-link" to="/participant/create">Create Participant</Link></li>
            <li><Link className="incon dev-link" to="/participant/all">All Participants</Link></li>
            <li><Link className="incon dev-link" to="/particpant/edit/1">Edit Participant</Link></li>
            <li><Link className="incon dev-link" to="/particpant/one/1">Participant Info (#1)</Link></li>
          </ul>
        </div>
        <div className="dev-h-list">
          <h3 className="oswald">Welcome Pages</h3>
          <ul className="dev home-list">
            <li><Link className="incon dev-link" to="/ASDDC/1/1/A/1">Group 1 (MET) - dyad 1</Link></li>
            <li><Link className="incon dev-link" to="/ASDDC/1/2/A/2">Group 1 (MET) - dyad 2</Link></li>
            <li><Link className="incon dev-link" to="/ASDDC/2/3/I/1">Group 2 (EVOT) - dyad 1</Link></li>
            <li><Link className="incon dev-link" to="/ASDDC/2/4/I/2">Group 2 (EVOT) - dyad 2</Link></li>
            <li><Link className="incon dev-link" to="/ASDDC/3/5/Q/1">Group 3 (PSVOT) - dyad 1</Link></li>
            <li><Link className="incon dev-link" to="/ASDDC/3/6/Q/2">Group 3 (PSVOT) - dyad 2</Link></li>
          </ul>
        </div>
      </div>
      <div className="dev-middle-container">
        <div className="dev-m-left">
          <h3 className=" oswald">Conditions</h3>
          <ul className="dev">
            <li><Link className="incon dev-link" to="/dct/pre/1">DCT-pre1</Link></li>
            <li><Link className="incon dev-link" to="/dct/pre/2">DCT-pre2</Link></li>
            <li><Link className="incon dev-link" to="/dct/pre/3">DCT-pre3</Link></li>
            <li><Link className="incon dev-link" to="/dct/post/1">DCT-post1</Link></li>
            <li><Link className="incon dev-link" to="/dct/post/2">DCT-post2</Link></li>
            <li><Link className="incon dev-link" to="/dct/post/3">DCT-post3</Link></li>
            <li><Link className="incon dev-link" to="/tp/pre">TactProbe-pre</Link></li>
            <li><Link className="incon dev-link" to="/tp/post">TactProbe-post</Link></li>
            <li><Link className="incon dev-link" to="/tsf/pre/1">Tsf-pre</Link></li>
            <li><Link className="incon dev-link" to="/tsf/post/1">Tsf-post1</Link></li>
            <li><Link className="incon dev-link" to="/tsf/post/2">Tsf-post2</Link></li>
            <li><Link className="incon dev-link" to="/tsf/post/3">Tsf-post3</Link></li>
            <li><Link className="incon dev-link" to="/amts/1/true">Arb MTS - TRUE (FB)</Link></li>
            <li><Link className="incon dev-link" to="/amts/1/false">Arb MTS - FALSE (No FB)</Link></li>
            <li><Link className="incon dev-link" to="/tat/1">Tat</Link></li>
            <li><Link className="incon dev-link" to="/spair/1">SPair</Link></li>
            <li><Link className="incon dev-link" to="/sdisc/1">SDisc</Link></li>
            <li><Link className="incon dev-link" to="/evott/1">Evot T</Link></li>
            <li><Link className="incon dev-link" to="/evotiv/1">Evot IV</Link></li>
            <li><Link className="incon dev-link" to="/psvott/1">Psvot T</Link></li>
            <li><Link className="incon dev-link" to="/psvotiv/1">Psvot IV</Link></li>
            <li><Link className="incon dev-link" to="/psvotps/1">Psvot PS</Link></li>
            <li><Link className="incon dev-link" to="/npst/1">Novel PST</Link></li>
            <li><Link className="incon dev-link" to="/exitsurvey">ExitSurvey</Link></li>
          </ul>
          <h3 className=" oswald">Feedback Tests</h3>
          <ul className="dev">
            <li><Link className="incon dev-link" onClick={resetLocalStorage}>Reset Local Storage</Link></li>
            <li><Link className="incon dev-link" onClick={setFeedback}>Set Feedback 1</Link></li>
            <li><Link className="incon dev-link" onClick={setNoFeedback}>Set No Feedback</Link></li>
            <li><Link className="incon dev-link" onClick={handleFeedback} value="correct">Correct</Link></li>
            <li><Link className="incon dev-link" onClick={handleFeedback} value="incorrect">Incorrect</Link></li>
          </ul>
        </div>
        <div className="dev-m-right">
          <h3 className="oswald">Non-Arbitrary MTS</h3>
          <ul className="dev home-list">
            <li><Link className="incon dev-link" to="/namts/101/1">NAMTS - SET A</Link></li>
            <li><Link className="incon dev-link" to="/namts/102/1">NAMTS - SET B</Link></li>
            <li><Link className="incon dev-link" to="/namts/103/1">NAMTS - SET C</Link></li>
            <li><Link className="incon dev-link" to="/namts/104/1">NAMTS - SET D</Link></li>
            <li><Link className="incon dev-link" to="/namts/105/1">NAMTS - SET E</Link></li>
            <li><Link className="incon dev-link" to="/namts/106/1">NAMTS - SET F</Link></li>
            <li><Link className="incon dev-link" to="/namts/107/1">NAMTS - SET G</Link></li>
            <li><Link className="incon dev-link" to="/namts/108/1">NAMTS - SET H</Link></li>
            <li><Link className="incon dev-link" to="/namts/109/1">NAMTS - SET I</Link></li>
            <li><Link className="incon dev-link" to="/namts/110/1">NAMTS - SET J</Link></li>
            <li><Link className="incon dev-link" to="/namts/111/1">NAMTS - SET K</Link></li>
            <li><Link className="incon dev-link" to="/namts/112/1">NAMTS - SET L</Link></li>
            <li><Link className="incon dev-link" to="/namts/113/1">NAMTS - SET M</Link></li>
            <li><Link className="incon dev-link" to="/namts/114/1">NAMTS - SET N</Link></li>
            <li><Link className="incon dev-link" to="/namts/115/1">NAMTS - SET O</Link></li>
          </ul>

          <h3 className="oswald">Instructions:</h3>
          <ul className="dev home-list">
            <li><Link className="incon dev-link" to="/instructions/amts/Z">amts</Link></li>
            <li><Link className="incon dev-link" to="/instructions/dct/pre">dct-pre - block 1</Link></li>
            <li><Link className="incon dev-link" to="/instructions/dct/post">dct-post - block 1</Link></li>
            <li><Link className="incon dev-link" to="/instructions/evotiv/Z">evotiv</Link></li>
            <li><Link className="incon dev-link" to="/instructions/evott/Z">evott</Link></li>
            <li><Link className="incon dev-link" to="/instructions/namts/101">namts - set A - block 1</Link></li>
            <li><Link className="incon dev-link" to="/instructions/npst/Z">npst</Link></li>
            <li><Link className="incon dev-link" to="/instructions/psvotiv/Z">psvotiv</Link></li>
            <li><Link className="incon dev-link" to="/instructions/psvotps/Z">psvotps</Link></li>
            <li><Link className="incon dev-link" to="/instructions/psvott/Z">psvott</Link></li>
            <li><Link className="incon dev-link" to="/instructions/sdisc/Z">sdisc</Link></li>
            <li><Link className="incon dev-link" to="/instructions/spair/Z">spair</Link></li>
            <li><Link className="incon dev-link" to="/instructions/tat/Z">tat</Link></li>
            <li><Link className="incon dev-link" to="/instructions/tp/Z">tp</Link></li>
            <li><Link className="incon dev-link" to="/instructions/tsf/Z">tsf</Link></li>
          </ul>
        </div>
      </div>
      <Feedback overlayClass={"confetti"} contentClass={"show"} opacity={1}/>
      <Feedback overlayClass={"blackScreen"} contentClass={"noShow"} opacity={0}/>
      <Feedback overlayClass={"grayScreen"} contentClass={"noShow"} opacity={0}/>

    </div>
  )
}

export default Developer
