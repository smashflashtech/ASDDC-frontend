const url = `http://localhost:5000`

class PsvotivModel {

  static stimuli = () => {
    return fetch(`${url}/psvotiv`).then(res => res.json())
  }

}

export default PsvotivModel