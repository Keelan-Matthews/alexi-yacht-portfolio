import React from 'react';
import Portrait from '../media/images/portrait.jpeg';
import PytLogo from '../media/svg/pyt-logo.svg';
import SSILogo from '../media/svg/ssi-logo.svg';
import IytLogo from '../media/svg/iyt-logo.svg';

export default function aboutMe() {
  return (
    <section className="bg-white vw-100 pt-3" id="about-me">
        <div className="d-flex flex-wrap justify-content-center">
            <img src={ PytLogo } className="company-logos logo-1" style={{ width: '100px' }} alt=""/>
            <img src={ SSILogo } className="company-logos" alt="" />
            <img src={ IytLogo } className="company-logos" alt="" />
        </div>
        <div className="container mt-3 small-container">
            <h1 className="section-heading fw-bold">About Me</h1>
            <div className="d-flex flex-wrap mt-5 justify-content-center pb-5">
                <img src={ Portrait } className="me-5 pb-5 portrait-image" alt="Portrait of Alexi Papas" />
                <div style={{ width: '500px'}} className="about-me-info">
                    <p className="fw-bold">Objective</p>
                    <p>
                        I am a young, enthusiastic, humorous,
                        and driven individual, willing to learn
                        and always do a job to the best of my
                        ability. Many people describe me as
                        being easy to work with as well as a
                        good team player that can take
                        responsibility when needed. I am looking
                        for a permanent or rotational role as a
                        Deckhand on a private or charter yacht.
                    </p>
                    <p className="fw-bold">Experience</p>
                    <p>
                        I have no prior experience in the yachting industry, but I am very determined
                        and willing to learn all about the industry and what it has to offer. I am a
                        fast learner and can follow instructions as well as work unsupervised if
                        need be. I believe that if given the opportunity, I could be an asset to any
                        crew.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
