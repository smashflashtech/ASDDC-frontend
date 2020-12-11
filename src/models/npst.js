const url = `http://localhost:5000`

class NpstModel {

  static stimuli = () => {
    return fetch(`${url}/npst`).then(res => res.json())
  }

}

export default NpstModel