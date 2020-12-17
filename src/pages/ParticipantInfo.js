import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import ParticipantModel from '../models/participant'

const ParticipantInfo = (props) => {
  console.log("WHAT IS THIS?", props.match.params.id)
  const [participantId] = useState(props.match.params.id)
  const [group_id, setGroup_id] = useState()
  const [dyad_L, setDyad_L] = useState()
  const [dyad_N, setDyad_N] = useState()
  const [date_of_participation, setDate_of_participation] = useState()
  const [remedial, setRemedial] = useState()
  const [notes, setNotes] = useState()

  const fetchParticipant = () => {
    ParticipantModel.one(participantId).then((data) => {
      console.log(data)
      setGroup_id(data.group_id)
      setDyad_L(data.dyad_L)
      setDyad_N(data.dyad_N)
      setDate_of_participation(data.date_of_participation)
      setNotes(data.setNotes)
      setRemedial(data.remedial)
    })
  }

  useEffect(() => { fetchParticipant() }, [])


  return (
    <div>
      <h3>Participant {participantId}</h3>
      <p><span>Date of Participation: </span>{date_of_participation}</p>
      <p><span>Group ID: </span>{group_id}</p>
      <p><span>Dyad: </span> {dyad_L}{dyad_N}</p>
      <p><span>Remedial: </span> {remedial}</p>
      <p><span>Notes: </span>{notes}</p>
      <button><Link to={`/participant/edit/${participantId}`}>Edit Participant</Link></button>

      <h3>Data</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis optio veniam temporibus totam beatae nemo similique harum? Esse cupiditate inventore tenetur labore, eligendi ut nihil veritatis, impedit quas temporibus voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum a error quod ratione neque obcaecati hic! Eum sint sed doloremque qui consectetur praesentium ad, unde exercitationem eaque explicabo quam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure incidunt eum quia cupiditate voluptas culpa eligendi asperiores fugiat suscipit architecto nam, officia nobis delectus nisi voluptates. Perspiciatis eos facilis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est commodi porro atque facilis aliquam! Numquam id, quis praesentium consectetur architecto delectus sunt, vel similique debitis rerum nobis reprehenderit quo ducimus?</p>
    </div>
  )
}

export default ParticipantInfo
