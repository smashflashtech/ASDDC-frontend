const url = `http://localhost:5000`

class NamtsModel {

  static stimuli = (set) => {
    return fetch(`${url}/nonamts/${set}`).then(res => res.json())
  }

}

export default NamtsModel