import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Promoting human rights by using innovation",
          "Building new strategies to improve living",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text