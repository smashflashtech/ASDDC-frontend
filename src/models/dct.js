const url = `http://localhost:5000`

class DctModel {

  static stimuli = () => {
    return fetch(`${url}/dct`).then(res => res.json())
  }

}

export default DctModel