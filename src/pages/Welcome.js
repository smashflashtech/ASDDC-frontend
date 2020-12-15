import React, {useState, useEffect} from 'react'
import '../css/welcome.css'
import Button from '../components/Button'



const Welcome = (props) => {
  //url to begin is always DCT pre 1
  const [startUrl,setStartUrl] = useState()

  const participantSetup = () =>{
    localStorage.clear()
    localStorage.setItem("group_id", props.match.params.groupId)
    localStorage.setItem("participant_id", props.match.params.participantId)
    localStorage.setItem("dyad_L", props.match.params.dyadL)
    localStorage.setItem("dyad_N", props.match.params.dyadN)
    localStorage.setItem(`amts-true-2count`, 0)
    localStorage.setItem(`amts-false-2count`, 0)
    localStorage.setItem(`tat`, 0)
    let today = new Date()
    let dateTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'; '+today.getHours() + ":" + today.getMinutes()
    localStorage.setItem(`date_of_participation`, dateTime)

    //in the future the URL could differ depending on group/dyad assignment
    //for now, everyone starts at the same pretest
    setStartUrl('/instructions/dct/pre')
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
