const url = `http://localhost:5000`

class DeveloperModel {

  static test = () => {
    return fetch(`${url}/`).then(res => res.json())
  }

}

export default DeveloperModel