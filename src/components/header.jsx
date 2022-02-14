import React from 'react';
import oceanBackground from '../media/video/ocean.mp4';
import Typed from 'react-typed';

export default function header() {
  return (
    <header id="header">
      <video 
        src={oceanBackground}
        autoPlay muted
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
          <a href="#" role="button" className="btn btn-light btn-lg me-3">Download CV</a>
          <a href="#" role="button" className="btn btn-outline-light text-white btn-lg">Contact Me</a>
        </div>
      </div>
    </header>
  )
}
