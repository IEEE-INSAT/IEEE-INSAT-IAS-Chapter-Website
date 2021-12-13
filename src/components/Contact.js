import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { getFromPublic } from '../shared/functions/public'
import '../styles/components/Contact.scss'
import { faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <div className="contact">
            <div className="behind-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fillOpacity="1" d="M0,224L26.7,192C53.3,160,107,96,160,106.7C213.3,117,267,203,320,213.3C373.3,224,427,160,480,149.3C533.3,139,587,181,640,202.7C693.3,224,747,224,800,218.7C853.3,213,907,203,960,186.7C1013.3,171,1067,149,1120,160C1173.3,171,1227,213,1280,224C1333.3,235,1387,213,1413,202.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                </svg>
            </div>
            <div className="container">
                <div className="cos-left">
                    <img src={getFromPublic('/images/logos/white.png')} className="logo" alt="" />
                    <p>
                    IAS enriches both its individual members and the industry as a whole through the sharing of specific industry-related solutions.
                    </p>
                </div>
                <div className="cos-right">
                    <p>ieee.ias.insat@gmail.com</p>
                    <p>1080 Tunis Cedex, Tunis 1080</p>
                    <p>+216 52301340</p>
                
                    <div className="icons">
                        <a href="https://www.facebook.com/IASINSAT/">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.linkedin.com/company/ieee-insat-ias-sbc/mycompany/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
