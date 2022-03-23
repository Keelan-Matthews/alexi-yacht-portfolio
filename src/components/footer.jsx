import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function footer() {
  return (
    <footer className="bg-white vw-100 d-flex flex-wrap justify-content-center py-5 px-5">
      <div className="me-4 mb-3 footer-flex">
        <div className="d-flex align-items-center mb-3">
          <FontAwesomeIcon icon={ faMapMarkerAlt } className="me-2"/>
          <p className="mb-0">Antibes, France</p>
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={ faWhatsapp } className="me-2" />
          <p className="mb-0">+27 72 842 3975</p>
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={ faPhone } className="me-2" />
          <p className="mb-0">+33 7 49 60 54 77</p>
        </div>
      </div>

      <div className="footer-flex">
        <div className="d-flex align-items-center mb-3">
          <FontAwesomeIcon icon={ faEnvelope } className="me-2" />
          <a href="mailto:alexipapasyachting@gmail.com" className="text-black">alexipapasyachting@gmail.com</a>
        </div>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={ faSkype } className="me-2" />
            <p className="mb-0">alexipapas4</p>
          </div>
      </div> 
    </footer>
  )
}
