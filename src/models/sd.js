const url = `http://localhost:5000`

class SdModel {

  static stimuli = () => {
    return fetch(`${url}/sd`).then(res => res.json())
  }

}

export default SdModel