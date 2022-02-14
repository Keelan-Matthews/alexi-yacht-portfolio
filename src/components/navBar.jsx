import React, { useState } from 'react';

export default function NavBar() {
    const [navbarVisible, setNavbarVisible] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 600)
            setNavbarVisible(true);
        else
            setNavbarVisible(false);
    }

    window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbarVisible ? "navbar navbar-active navbar-expand-lg position-fixed w-100 py-2" : "navbar navbar-expand-lg position-fixed w-100 py-2"}>
        <div className="container-fluid">
            <a className="navbar-brand text-white fw-bold">DECKHAND</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                    <a className="nav-link text-white" aria-current="page" href="#header">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#about-me">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#qualifications">Qualifications</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
