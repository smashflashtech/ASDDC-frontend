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

  static one = () => {
    return fetch(`${url}/participants`).then(res => res.json())
  }

  static update = () => {
    return fetch(`${url}/participant/:id`).then(res => res.json())
  }

  static delete = () => {
    return fetch(`${url}/participant/:id`).then(res => res.json())
  }

}

export default ParticipantModel