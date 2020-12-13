import React, {useState, useEffect} from 'react'
import '../css/welcome.css'
import Button from '../components/Button'



const Welcome = (props) => {
  //url to begin is always DCT pre 1
  const [startUrl,setStartUrl] = useState()

  const participantSetup = () =>{
    localStorage.clear()
    localStorage.setItem("groupId", props.match.params.groupId)
    localStorage.setItem("participantId", props.match.params.participantId)
    localStorage.setItem("dyadL", props.match.params.dyadL)
    localStorage.setItem("dyadN", props.match.params.dyadN)

    //in the future the URL could differ depending on group/dyad assignment
    //for now, everyone starts at the same pretest
    setStartUrl('/dct/pre/1')
  }

  useEffect( () => { participantSetup() },[])

  return (
    <div className="welcome-container">
      <div className="welcome-note">
        <h1>Welcome!</h1>
        <h3>Thank you for yor participation.</h3><br/>
        <Button url={startUrl} text={"Start"}/>
      </div>
    </div>
  )
}

export default Welcome
