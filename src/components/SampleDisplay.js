import React, {useState} from 'react'
import "../css/sampledisplay.css";

const SampleDisplay = (props) => {
  const [src, setSrc] = useState(require(`../stimuli/${props.os.imagePath}`).default)
  const [sample] = useState(require(`../stimuli/${props.os.imagePath}`).default)
  console.log(src)
  

    // write a function that upon click changes the image url from OS to sample


  return (
    <div class="sample-container">
      <img class="os-sample" src={src}/>
    </div>
  )
}

export default SampleDisplay
