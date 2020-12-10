const url = `http://localhost:5000`

class HomeModel {

  static test = () => {
    return fetch(`${url}/`).then(res => res.json())
  }

}

export default HomeModel