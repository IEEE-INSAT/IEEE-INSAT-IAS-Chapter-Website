import React, { useRef } from 'react'
import { getFromPublic } from '../shared/functions/public'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import '../styles/components/member-image.scss'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import useRevealOneTime from '../shared/hooks/useRevealOneTime'

export default function MemberImage({name, position, facebook, linkedin,image}) {

    const memberRef = useRef(null);

    //changing class when revealed
    useRevealOneTime(memberRef);

    return (
        <div className="bureau-member" ref={memberRef} >
            <div className="image">
                <FontAwesomeIcon icon={faCog}/>
                <div className="img" alt="" >
                    <img src={getFromPublic(image)} alt="" />
                    <div className="content">
                        <h2> {name} </h2>
                        <p> {position} </p>
                        <div className="links">
                            <a href={facebook}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href={linkedin}>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
