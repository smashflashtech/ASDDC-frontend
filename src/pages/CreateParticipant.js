import React, { useState } from 'react'
import ParticipantModel from '../models/participant'

const CreateParticipant = () => {
  const [group_id, setGroup_id] = useState()
  const [dyad_L, setDyad_L] = useState()
  const [dyad_N, setDyad_N] = useState()
  const [date_of_participation, setDate_of_participation] = useState()
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
      console.log('elllffiiinnnn', data)
    })
  }

  return (
    <div>
      <h1>Create Participant</h1>
      <form className="cp-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="cp-label" htmlFor="group_id">Group ID: </label><br/>
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
          /><br/>
          <label className="cp-label" htmlFor="dyad_L">Dyad L</label><br/>
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
          /><br/>
          <label className="cp-label" htmlFor="dyad_N">Dyad N</label><br/>
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
          /><br/>
          <label className="cp-label" htmlFor="date_of_participation">Date of Participation: </label><br/>
          <input
            className="cp-input"
            onChange={(e) => { setDate_of_participation(e.target.value) }}
            rows="5"
            cols="40"
            type="date"
            id="date_of_participation"
            name="date_of_participation"
            value={date_of_participation}
          /><br/>
          <label className="cp-label" htmlFor="date_of_participation">Notes: </label><br/>
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
        <button className="cp-button" type="submit">Create Participant</button>
      </form>
    </div>
  )
}

export default CreateParticipant
