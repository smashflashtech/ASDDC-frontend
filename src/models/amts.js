const url = `http://localhost:5000`

class AmtsModel {

  static stimuli = () => {
    return fetch(`${url}/amts`).then(res => res.json())
  }

}

export default AmtsModel