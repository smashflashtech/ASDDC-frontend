import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ParticipantModel from '../models/participant'
import '../css/addeditparticipant.css'

const CreateParticipant = (props) => {
  const [group_id, setGroup_id] = useState()
  const [dyad_L, setDyad_L] = useState()
  const [dyad_N, setDyad_N] = useState()
  const [date_of_participation, setDate_of_participation] = useState()
  const [remedial, setRemedial] = useState()
  const [notes, setNotes] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    ParticipantModel.create({
      group_id,
      dyad_L,
      dyad_N,
      date_of_participation,
      notes
    }).then(data => {
      props.history.push('/participant/all')
    })
  }

  return (
    <div>
      <p>⬅️ <Link className="ae-link" to={'/dashboard'}>Back to Dashboard</Link></p>
    <div className="ae-body">
    <div className="ae-form-container">
      <div>
        <h1>Create Participant</h1>
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
              placeholder="enter 1, 2, or 3"
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
              placeholder="enter letter"
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
              placeholder="enter number 1 or 2"
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
            /><br />
            <label className="cp-label" htmlFor="date_of_participation">Notes: </label><br />
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
          <button className="cp-button btn" type="submit">Create Participant</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default CreateParticipant
