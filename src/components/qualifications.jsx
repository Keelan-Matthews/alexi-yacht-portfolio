import React from 'react';
import SailorHat from '../media/svg/sailor-hat.svg';
import Motor from '../media/svg/motor.svg';
import Yacht from '../media/svg/yacht.svg';
import Health from '../media/svg/health-insurance.svg';
import License from '../media/svg/driver-license.svg';
import Diving from '../media/svg/diving.svg';
import STWC from '../media/svg/stwc.svg';
import QualificationCard from './QualificationCard';
import Seamanship from '../media/pdf/elementary-seamanship.pdf';
import RibMaster from '../media/pdf/rib-master.pdf';
import STCWForm from '../media/pdf/stcw.pdf';
import YachtRating from '../media/pdf/yacht-rating.pdf';
import ENG1 from '../media/pdf/eng1.pdf';
import DriversPermit from '../media/pdf/driving-permit.pdf';
import openWaterDiving from '../media/pdf/diving.pdf';


export default function () {
  return (
    <div className="vw-100 py-5 off-white bg-primary" id="qualifications">
        <div className="my-5 py-5">
            <div className="container">
                <h1 className="mb-5 section-heading fw-bold">Qualifications</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <QualificationCard illustration={ SailorHat } title="Elementary Seamanship" pdf={ Seamanship } name="Elementary Seamanship Certificate" />
                <QualificationCard illustration={ STWC } title="STCW 2010" pdf={ STCWForm } />
                <QualificationCard illustration={ Motor } title="Small Powerboat & RIB Master License" pdf={ RibMaster } name="RIB Master License" />
                <QualificationCard illustration={ Yacht } title="MCA Approved Yacht Rating Certificate" pdf={ YachtRating } name="Yacht Rating Certificate" />
                <QualificationCard illustration={ Diving } title="Open Water Diving" pdf={ openWaterDiving } name="Open Water Diving Certificate" />
                <QualificationCard illustration={ Health } title="ENG 1" pdf={ ENG1 } name="ENG 1" />
                <QualificationCard illustration={ License } title="Driver's License" pdf={ DriversPermit } name="Driver's Permit" />
            </div>
        </div>
    </div>
  )
}
