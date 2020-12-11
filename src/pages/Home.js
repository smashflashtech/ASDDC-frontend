import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
      <ul>
        <li><Link to="/urlconstructor">UrlConstructor</Link></li>
        <li><Link to="/particpant/1">Participant ONE Info</Link></li>
      </ul>


      <ol>
      <li><Link to="/dct">DCT</Link></li>
      <li><Link to="/tp">TactProbe</Link></li>
      <li><Link to="/tsf">Tsf</Link></li>
      <li>NonAMTS
          <ul>
            <li><Link to="/nonamts/A">NonAMTS - SET A</Link></li>
            <li><Link to="/nonamts/B">NonAMTS - SET B</Link></li>
            <li><Link to="/nonamts/C">NonAMTS - SET C</Link></li>
            <li><Link to="/nonamts/D">NonAMTS - SET D</Link></li>
            <li><Link to="/nonamts/E">NonAMTS - SET E</Link></li>
            <li><Link to="/nonamts/F">NonAMTS - SET F</Link></li>
            <li><Link to="/nonamts/G">NonAMTS - SET G</Link></li>
            <li><Link to="/nonamts/H">NonAMTS - SET H</Link></li>
            <li><Link to="/nonamts/I">NonAMTS - SET I</Link></li>
            <li><Link to="/nonamts/J">NonAMTS - SET J</Link></li>
            <li><Link to="/nonamts/K">NonAMTS - SET K</Link></li>
            <li><Link to="/nonamts/L">NonAMTS - SET L</Link></li>
            <li><Link to="/nonamts/M">NonAMTS - SET M</Link></li>
            <li><Link to="/nonamts/N">NonAMTS - SET N</Link></li>
            <li><Link to="/nonamts/O">NonAMTS - SET O</Link></li>
          </ul>
      </li>
      <li><Link to="/amts">ArbMTS</Link></li>
      <li><Link to="/tat">Tat</Link></li>
      <li><Link to="/spair">SPair</Link></li>
      <li><Link to="/sdisc">SDisc</Link></li>
      <li><Link to="/evott">EvotT</Link></li>
      <li><Link to="/evotiv">EvotIV</Link></li>
      <li><Link to="/psvott">PsvotT</Link></li>
      <li><Link to="/psvotiv">PsvotIV</Link></li>
      <li><Link to="/psvotps">PsvotPS</Link></li>
      <li><Link to="/novelpst">NovelPST</Link></li>
      <li><Link to="/exitsurvey">ExitSurvey</Link></li>
      </ol>
    </div>
  )
}

export default Home
