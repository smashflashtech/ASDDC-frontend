const url = `http://localhost:5000`

class NonamtsModel {

  static stimuli = (set) => {
    return fetch(`${url}/nonamts/${set}`).then(res => res.json())
  }

}

export default NonamtsModel