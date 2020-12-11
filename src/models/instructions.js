const url = `http://localhost:5000`

class InstructionsModel {

  static stimuli = (phase) => {
    return fetch(`${url}/instructions/${phase}`).then(res => res.json())
  }

}

export default InstructionsModel