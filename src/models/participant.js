const url = `http://localhost:5000`

class ParticipantModel {

  static all = () => {
    return fetch(`${url}/participants`).then(res => res.json())
  }

  static create = () => {
    return fetch(`${url}/participants`).then(res => res.json())
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