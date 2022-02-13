import React from 'react';
import Portrait from '../media/images/portrait.jpeg';

export default function aboutMe() {
  return (
    <section className="bg-white vw-100 pt-5" id="about-me">
        <div className="container mt-5">
            <h1 className="serif-heading">About Me</h1>
            <div className="d-flex flex-wrap mt-5 justify-content-center pb-5">
                <img src={ Portrait } className="w-25 me-5 pb-5" alt="Portrait of Alexi Papas" />
                <div style={{ width: '500px'}}>
                    <p className="serif-heading fs-4">Objective</p>
                    <p>
                    I am a young, enthusiastic, humorous,
                    and driven individual, willing to learn
                    and always do a job to the best of my
                    ability. Many people describe me as
                    being easy to work with as well as a
                    good team player that can take
                    responsibility if needed. I am looking
                    for a permanent or rotational role as a
                    Deckhand on a private or charter yacht.
                    </p>
                    <p className="serif-heading fs-4">Experience</p>
                    <p>
                        No prior experience in the yachting industry but I am very determined
                        and willing to learn all about the industry and what it has to offer. I am a
                        fast learner and can follow instructions as well as work unsupervised if
                        need be, I believe that if given the chance, I could be an asset to any
                        crew.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
