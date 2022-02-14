import React from 'react';
import oceanBackground from '../media/video/ocean.mp4';
import fallbackBackground from '../media/images/fallback-background.jpg';
import Typed from 'react-typed';
import CV from '../media/pdf/alexi-papas-cv.pdf'

export default function header() {
  return (
    <header id="header">
      <img src={ fallbackBackground } alt="" className="w-100 position-fixed backgroundImage" />
      <video 
        src={oceanBackground}
        autoPlay muted
        playsinline
        loop
        className="w-100 position-fixed z-index backgroundVideo"
      >
      </video>
      <div className="d-flex flex-column align-items-center header-padding">
        <Typed
          className="text-white fs-5"
          strings={["Hello, I'm", "Bonjour, je suis", "Hola, soy", "Ciao, sono"]}
          typeSpeed={90}
          backSpeed={90}
          loop
        />
        <h1 className="text-white fw-bold header-name serif-heading">Alexi Papas</h1>
        <h3 className="text-white">Certified Deckhand</h3>
        <div className="mt-5">
          <a href={ CV } role="button" className="btn btn-light btn-lg me-3" download="Alexi Papas CV">Download CV</a>
          <a href="mailto:alexipapas2@icloud.com" role="button" className="btn btn-outline-light text-white btn-lg">Contact Me</a>
        </div>
      </div>
    </header>
  )
}
