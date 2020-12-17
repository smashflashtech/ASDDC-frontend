import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/allparticipants.css'


const ParticipantCard = (props) => {


  return (


    <>
      {props.participants !== undefined ?
        props.participants.map((participant, index) => (
          <div key={index} className="p-card">
            <h3>Participant {participant.id}</h3>
            <div className="ap-pic-container">
              <img className="ap-pic" src="https://www.flaticon.com/svg/static/icons/svg/2368/2368378.svg" />
            </div>
            <div className="ap-details">
              <p><span className="oswald">Group ID: </span><span className="incon">{participant.group_id}</span></p>
              <p><span className="oswald">Dyad: </span><span className="incon"> {participant.dyad_L}{participant.dyad_N}</span></p>
              <p><span className="oswald">Date of Participation: </span><br/><span className="incon">{participant.date_of_participation}</span></p>
              <p><span className="oswald">Remedial: </span><span className="incon"> {participant.remedial}</span></p>
              <p><span className="oswald">Notes: </span><span className="incon">{participant.notes}</span></p>
              {/* <button className="p-button btn"><Link to={`/participant/one/${participant.id}`}>More Info</Link></button> */}
            </div>
            <div className="ap-edit">
              <Link className="ap-link incon" to={`/participant/edit/${participant.id}`}>Edit Participant</Link>
            </div>
          </div>
        ))
        : <></>}
    </>
  )
}

export default ParticipantCard
