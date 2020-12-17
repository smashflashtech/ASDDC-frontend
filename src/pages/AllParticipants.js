import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ParticipantModel from '../models/participant'
import ParticipantCard from '../components/ParticipantCard'


const AllParticipants = () => {
  const [participants, setParticipants] = useState()

  const fetchParticipants = () => {
    ParticipantModel.all().then((data) => {
      console.log('THIS IS THE BIDNESS', data)
      setParticipants(data)
    })
  }

  useEffect(() => { fetchParticipants() }, [])


  return (
    <>
      <p>⬅️ <Link to={'/dashboard'}>Back to Dashboard</Link></p>
      <div>
        <h1>All Participants</h1>
        <div className="p-container">
          <ParticipantCard participants={participants} />
        </div>
      </div>
    </>
  )
}

export default AllParticipants
