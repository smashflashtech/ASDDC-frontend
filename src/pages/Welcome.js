import React, {useState, useEffect} from 'react'
import '../css/welcome.css'
import Button from '../components/Button'



const Welcome = (props) => {
  //url to begin is always DCT pre 1
  const [startUrl] = useState()

  const participantSetup = () =>{
    localStorage.clear()
    localStorage.setItem("groupId", props.match.params.groupId)
    localStorage.setItem("participantId", props.match.params.participantId)
    localStorage.setItem("dyadL", props.match.params.dyadL)
    localStorage.setItem("dyadN", props.match.params.dyadN)
  }

  useEffect( () => { participantSetup() },[])

  return (
    <div className="welcome-container">
      <div className="welcome-note">
        <h1>Welcome!</h1>
        <h3>Thank you for yor participation.</h3><br/>
        <Button />
      </div>
    </div>
  )
}

export default Welcome
