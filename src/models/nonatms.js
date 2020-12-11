const url = `http://localhost:5000`

class NonatmsModel {

  static stimuli = () => {
    return fetch(`${url}/nonatms/:set`).then(res => res.json())
  }

}

export default NonatmsModel