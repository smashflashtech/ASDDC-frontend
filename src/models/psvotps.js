const url = `http://localhost:5000`

class PsvotpsModel {

  static stimuli = () => {
    return fetch(`${url}/psvotps`).then(res => res.json())
  }

}

export default PsvotpsModel