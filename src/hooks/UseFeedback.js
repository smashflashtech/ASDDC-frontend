import React from 'react'

const UseFeedback = (selectedValue) => {
  // const feedback = (selectedValue) => {
  let feedback = localStorage.getItem('feedback')
  if (feedback === "false") {
    let overlay = document.getElementById('neutral')
    overlay.style.display = "inline-block"
    setTimeout(function () { overlay.style.display = "none" }, 3000)
  } else if (feedback === "true" && selectedValue === "correct") {
    let overlay = document.getElementById('yay')
    overlay.style.display = "inline-block"
    setTimeout(function () { overlay.style.display = "none" }, 3000)
  } else if (feedback === "true" && selectedValue === "incorrect") {
    let overlay = document.getElementById('nay')
    overlay.style.display = "inline-block"
    setTimeout(function () { overlay.style.display = "none" }, 3000)
  }
  // }

  return (<></>)
}

export default UseFeedback
