import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const ParticipantCard = (props) => {


  return (


  <div>
  {props.participants !== undefined ?
    props.participants.map((participant, index)=> (
    <div key={index} className="p-card">
      <h3>Participant {participant.id}</h3>
      <p><span>Date of Participation: </span>{participant.date_of_participation}</p>
      <p><span>Group ID: </span>{participant.group_id}</p>
      <p><span>Dyad: </span> {participant.dyad_L}{participant.dyad_N}</p>
      <p><span>Remedial: </span> {participant.remedial}</p>
      <p><span>Notes: </span>{participant.notes}</p>
      <button className="p-button btn"><Link to={`/participant/one/${participant.id}`}>More Info</Link></button>
      <button className="p-button btn"><Link to={`/participant/edit/${participant.id}`}>Edit Participant</Link></button>
    </div>
  ))
  : <></>}
    </div>
  )
}

export default ParticipantCard
