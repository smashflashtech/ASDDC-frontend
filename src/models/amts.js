const url = `http://localhost:5000`

class AmtsModel {

  static stimuli = () => {
    return fetch(`${url}/amts`).then(res => res.json())
  }

  static create = (trialcode, responseData) => {
    return fetch(`${url}/response/${trialcode}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(responseData)
    })
    .then(res => res.json())
  }

}

export default AmtsModel