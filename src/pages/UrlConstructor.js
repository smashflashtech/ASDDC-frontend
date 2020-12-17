import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../css/urlConstructor.css'

const UrlConstructor = () => {
  const [baseUrl] = useState('http://localhost:3000')
  const [groupId, setGroupId] = useState('')
  const [participantId, setParticipantId] = useState('')
  const [dyadL, setDyadL] = useState('')
  const [dyadN, setDyadN] = useState('')


  return (
    <>
      <p>⬅️ <Link to={'/dashboard'}>Back to Dashboard</Link></p>
      <div className="uc-body">
        <div className="uc-container">
          <div className="uc-top">
            <div className="uc-left">
              <form className="uc-form"><h3 className="uc-h3">Enter Information:</h3>
                <label>Group ID</label><br />
                <input
                  onChange={(e) => { setGroupId(e.target.value) }}
                  value={groupId}
                  type="text"
                  name="groupId"
                  placeholder="Number (#)"
                /><br />
                <label>Participant ID</label><br />
                <input
                  onChange={(e) => { setParticipantId(e.target.value) }}
                  value={participantId}
                  type="text"
                  name="participantId"
                  placeholder="Number (#)"
                /><br />
                <label>Dyad Letter</label><br />
                <input
                  onChange={(e) => { setDyadL(e.target.value) }}
                  value={dyadL}
                  type="text"
                  name="dyadL"
                  placeholder="Letter (L)"
                /><br />
                <label>Dyad Number</label><br />
                <input
                  onChange={(e) => { setDyadN(e.target.value) }}
                  value={dyadN}
                  type="text"
                  name="dyadN"
                  placeholder="Number (#)"
                /><br />
              </form>
            </div>
            <div className="uc-right">
              <h3 className="uc-h3">Key</h3>
              <ol className="uc-list"><h5>Group</h5>
                <li>MET</li>
                <li>EVOT</li>
                <li>PSVOT</li>
              </ol>
            </div>
          </div>
          <div className="uc-bottom">
            <h3>Here is the URL:</h3>
            <div className="uc-url-container">
              <p className="uc-url">{`${baseUrl}/ASDDC/${groupId}/${participantId}/${dyadL.toUpperCase()}/${dyadN}`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UrlConstructor
