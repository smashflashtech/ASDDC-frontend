const url = `http://localhost:5000`

class TpModel {

  static stimuli = () => {
    return fetch(`${url}/tp`).then(res => res.json())
  }

}

export default TpModel