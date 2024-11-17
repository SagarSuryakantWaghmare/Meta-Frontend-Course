import React from 'react'
import ReactPlayer from 'react-player/youtube'
function Media() {
  return (
    <>
    <h1>Media Player</h1>
    <ReactPlayer
      url='https://youtu.be/buSdqtdn_4I?si=UTwRQWtYiSRzzftu'
      controls
      width='480px'
      volume={0.5}
      height='240px'></ReactPlayer>
    </>
  )
}

export default Media