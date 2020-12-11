const url = `http://localhost:5000`

class PsvottModel {

  static stimuli = () => {
    return fetch(`${url}/psvott`).then(res => res.json())
  }

}

export default PsvottModel