import React, {useState} from 'react'
import "../css/sampledisplay.css";

const SampleDisplay = (props) => {
  console.log("sample?", props.samplePath)
  const [src, setSrc] = useState(require(`../stimuli/${props.os.imagePath}`).default)
  const [samplePath] = useState(props.samplePath)
  console.log(src)
  

    // write a function that upon click changes the image url from OS to sample
  

  return (
    <div class="sample-container">
      <img class="os-sample" src={samplePath}/>
    </div>
  )
}

export default SampleDisplay
