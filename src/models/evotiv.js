const url = `http://localhost:5000`

class EvotivModel {

  static stimuli = () => {
    return fetch(`${url}/evotiv`).then(res => res.json())
  }

}

export default EvotivModel