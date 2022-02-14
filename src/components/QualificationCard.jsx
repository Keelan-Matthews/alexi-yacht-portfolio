import React from 'react'

function QualificationCard(props) {
  return (
    <div className="d-flex wrap flex-column align-items-center justify-content-between bg-white rounded-3 qualifications-card shadow-lg px-3 m-3">
        <div>
            <img src={ props.illustration } className="skill-illustration py-4" alt="" />
            <p className="fw-bold">{ props.title }</p>
        </div>
        <a href={ props.pdf } role="button" className="btn btn-primary mb-3 text-muted fw-bold card-button" download={ props.name }>Certificate</a>
    </div>
  )
}

export default QualificationCard
