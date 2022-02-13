import React from 'react'

export default function navBar() {
  return (
    <nav class="navbar navbar-expand-lg position-fixed w-100 my-3">
        <div class="container-fluid">
            <a class="navbar-brand text-white fw-bold">DECKHAND</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li class="nav-item">
                    <a class="nav-link text-white" aria-current="page" href="#header">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#about-me">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#qualifications">Qualifications</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
