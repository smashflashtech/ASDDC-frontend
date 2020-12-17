import React, { useState, useEffect } from 'react'
import ParticipantModel from '../models/participant'

const EditParticipant = (props) => {
  const [participantId] = useState(props.match.params.id)
  const [group_id, setGroup_id] = useState()
  const [dyad_L, setDyad_L] = useState()
  const [dyad_N, setDyad_N] = useState()
  const [date_of_participation, setDate_of_participation] = useState()
  const [remedial, setRemedial] = useState()
  const [notes, setNotes] = useState()

  const fetchParticipants = () => {
    ParticipantModel.one(participantId).then((data) => {
      console.log('THIS IS THE BIDNESS', data)
      setGroup_id(data.group_id)
      setDyad_L(data.dyad_L)
      setDyad_N(data.dyad_N)
      setDate_of_participation(data.date_of_participation)
      setNotes(data.notes)
      setRemedial(data.remedial)
    })
  }

  useEffect(() => { fetchParticipants() }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    ParticipantModel.update(participantId, {
      group_id,
      dyad_L,
      dyad_N,
      date_of_participation,
      notes
    }).then(data => {
      props.history.push('/participant/all')
    })
  }

  const handleDelete = (e) => {
    e.preventDefault()
    ParticipantModel.delete(participantId).then(data => {
        props.history.push('/participant/all')
    })
}

  return (
    <div>
      <h1>Edit Participant {participantId}</h1>
      <form className="cp-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="cp-label" htmlFor="group_id">Group ID: </label><br />
          <input
            className="cp-input"
            onChange={(e) => { setGroup_id(e.target.value) }}
            rows="5"
            cols="40"
            type="text"
            id="group_id"
            name="group_id"
            value={group_id}
          /><br />
          <label className="cp-label" htmlFor="dyad_L">Dyad L</label><br />
          <input
            className="cp-input"
            onChange={(e) => { setDyad_L(e.target.value) }}
            rows="5"
            cols="40"
            type="text"
            id="dyad_L"
            name="dyad_L"
            value={dyad_L}
          /><br />
          <label className="cp-label" htmlFor="dyad_N">Dyad N</label><br />
          <input
            className="cp-input"
            onChange={(e) => { setDyad_N(e.target.value) }}
            rows="5"
            cols="40"
            type="text"
            id="dyad_N"
            name="dyad_N"
            value={dyad_N}
          /><br />
          <label className="cp-label" htmlFor="date_of_participation">Date of Participation: </label><br />
          <input
            className="cp-input"
            onChange={(e) => { setDate_of_participation(e.target.value) }}
            rows="5"
            cols="40"
            type="date"
            id="date_of_participation"
            name="date_of_participation"
            value={date_of_participation}
          /><br />
          <label className="cp-label" htmlFor="date_of_participation">Remedial: </label><br />
          <input
            className="cp-input"
            onChange={(e) => { setRemedial(e.target.value) }}
            rows="5"
            cols="40"
            type="text"
            id="remedial"
            name="remedial"
            value={remedial}
          /><br/>
          <label className="cp-label" htmlFor="Notes">Notes: </label><br />
          <input
            className="cp-input"
            onChange={(e) => { setNotes(e.target.value) }}
            rows="5"
            cols="40"
            type="text"
            id="notes"
            name="notes"
            value={notes}
          />
        </div>
        <button className="cp-submit-button" type="submit">Save Changes</button>
      </form>
      <form onSubmit={handleDelete}><button className="cp-delete-button" type="submit">Delete</button></form>
    </div>
  )
}

export default EditParticipant
