const url = `http://localhost:5000`

class TsfModel {

  static stimuli = () => {
    return fetch(`${url}/tsf`).then(res => res.json())
  }

}

export default TsfModel