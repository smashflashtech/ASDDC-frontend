const url = `http://localhost:5000`

class ParticipantModel {

  static all = () => {
    return fetch(`${url}/participants`).then(res => res.json())
  }

  static create = (participant) => {
    return fetch(`${url}/participants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(participant)
    }).then(res => res.json())
  }

  static one = (participantId) => {
    return fetch(`${url}/participant/${participantId}`).then(res => res.json())
  }

  static update = (participantId, participant) => {
    return fetch(`${url}/participant/${participantId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(participant)
    }).then(res => res.json())
  }

  static delete = (participantId) => {
    return fetch(`${url}/participant/${participantId}`, {method: "DELETE"}).then(res => res.json())
  }

}

export default ParticipantModel