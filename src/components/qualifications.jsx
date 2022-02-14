import React from 'react';
import SailorHat from '../media/svg/sailor-hat.svg';
import Motor from '../media/svg/motor.svg';
import Yacht from '../media/svg/yacht.svg';
import Health from '../media/svg/health-insurance.svg';
import License from '../media/svg/driver-license.svg';
import Diving from '../media/svg/diving.svg';

export default function () {
  return (
    <div className="vw-100 py-5 off-white bg-primary" id="qualifications">
        <div className="container my-5 py-5">
            <h1 className="mb-5">Qualifications</h1>
            <div className="d-flex flex-wrap justify-content-center">
                <div className="d-flex wrap flex-column align-items-center bg-white rounded-3 qualifications-card shadow-lg px-3 m-3">
                    <img src={ SailorHat } className="skill-illustration py-5"/>
                    <p className="fw-bold">Elementary Seamanship</p>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded-3 qualifications-card shadow-lg px-3 m-3">
                    <img src={ Health } className="skill-illustration py-5"/>
                    <p className="fw-bold">STCW 2010</p>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded-3 qualifications-card shadow-lg px-3 m-3">
                    <img src={ Motor } className="skill-illustration py-5"/>
                    <p className="fw-bold">Small Powerboat & RIB Master License</p>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded-3 qualifications-card shadow-lg px-3 m-3">
                    <img src={ Yacht } className="skill-illustration py-5"/>
                    <p className="fw-bold">MCA Approved Yacht Rating Certificate</p>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded-3 qualifications-card shadow-lg px-3 m-3">
                    <img src={ License } className="skill-illustration py-5"/>
                    <p className="fw-bold">Driver's License</p>
                </div>
                <div className="d-flex flex-column align-items-center bg-white rounded-3 qualifications-card shadow-lg px-3 m-3">
                    <img src={ Diving } className="skill-illustration py-5"/>
                    <p className="fw-bold">Open Water Diving</p>
                </div>
            </div>
        </div>
    </div>
  )
}
