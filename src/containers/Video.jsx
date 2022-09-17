import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Video = ({ source = 'https://www.youtube.com/embed/am3riwYbG3s', isVideoPlaying }) => {
  return (
    <ReactPlayer playing={isVideoPlaying} style={{ width: "700px", maxWidth: '720px' }
    } url={source} />
  )
}

export default Video

// const Player = styled(ReactPlayer)`
//   width: 90vw;
//   max-width: 720px;
// `