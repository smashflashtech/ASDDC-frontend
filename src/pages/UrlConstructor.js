import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/urlConstructor.css'

const UrlConstructor = () => {
  const [baseUrl] = useState('http://localhost:3000')
  const [groupId, setGroupId] = useState('')
  const [participantId, setParticipantId] = useState('')
  const [dyadL, setDyadL] = useState('')
  const [dyadN, setDyadN] = useState('')


  return (
    <div className="uc-body-container">
      <p>⬅️<Link className="uc-link" to={'/dashboard'}> Back to Dashboard</Link></p>
      <div className="uc-body">
      <div className="uc-img-container">
        <img className="uc-img" src="https://www.flaticon.com/svg/static/icons/svg/3893/3893146.svg" alt="Construct a URL pattern"/>
      </div>
        <div className="uc-container">
          <div className="uc-top">
            <div className="uc-left">
              <form className="uc-form"><h3 className="uc-h3 oswald">Enter Information:</h3>
                <label className="incon">Group ID</label><br />
                <input
                  onChange={(e) => { setGroupId(e.target.value) }}
                  value={groupId}
                  type="text"
                  name="groupId"
                  placeholder="Number (#)"
                /><br />
                <label className="incon">Participant ID</label><br />
                <input
                  onChange={(e) => { setParticipantId(e.target.value) }}
                  value={participantId}
                  type="text"
                  name="participantId"
                  placeholder="Number (#)"
                /><br />
                <label className="incon">Dyad Letter</label><br />
                <input
                  onChange={(e) => { setDyadL(e.target.value) }}
                  value={dyadL}
                  type="text"
                  name="dyadL"
                  placeholder="Letter (L)"
                /><br />
                <label className="incon">Dyad Number</label><br />
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
              <ul className="uc-list"><h3 className="oswald">Group</h3>
                <li><span className="oswald">MET:</span><span className="incon"> 1</span></li>
                <li><span className="oswald">EVOT:</span><span className="incon"> 2</span></li>
                <li><span className="oswald">PSVOT:</span><span className="incon"> 3</span></li>
              </ul>
              <ul className="uc-list"><h3>Dyad N</h3>
                <li><span className="oswald">MET:</span><span className="incon"> A - H</span></li>
                <li><span className="oswald">EVOT:</span><span className="incon"> I - P</span></li>
                <li><span className="oswald">PSVOT:</span><span className="incon"> Q - X</span></li>
              </ul>
              <ul className="uc-list"><h3>Dyad N</h3>
                <li><span className="oswald">1</span></li>
                <li><span className="oswald">2</span></li>
              </ul>
            </div>
          </div>
          <div className="uc-bottom">
            <h3 className="oswald">Here is the URL:</h3>
            <div className="uc-url-container">
              <p className="uc-url incon">{`${baseUrl}/ASDDC/${groupId}/${participantId}/${dyadL.toUpperCase()}/${dyadN}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UrlConstructor
