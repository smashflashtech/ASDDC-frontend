const url = `http://localhost:5000`

class TatModel {

  static stimuli = () => {
    return fetch(`${url}/tat`).then(res => res.json())
  }

}

export default TatModel