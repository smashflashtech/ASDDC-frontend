import React from 'react'
import '../css/welcome.css'
import Button from '../components/Button'



const Welcome = () => {
  //url to begin is always DCT pre 1



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
