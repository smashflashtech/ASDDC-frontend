const url = `http://localhost:5000`

class SpModel {

  static stimuli = () => {
    return fetch(`${url}/sp`).then(res => res.json())
  }

}

export default SpModel