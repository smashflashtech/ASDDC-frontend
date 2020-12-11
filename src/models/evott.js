const url = `http://localhost:5000`

class EvottModel {

  static stimuli = () => {
    return fetch(`${url}/evott`).then(res => res.json())
  }

}

export default EvottModel