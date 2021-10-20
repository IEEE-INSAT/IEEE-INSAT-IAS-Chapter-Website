import React, { useRef } from 'react'
import { getFromPublic } from '../shared/functions/public'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import '../styles/components/spin-image.scss'
import useRevealOne from '../shared/hooks/useRevealOne'

export default function SpinImage({image}) {

    const imageRef = useRef(null) ;

    useRevealOne(imageRef);

    return (
        <div className="image" ref={imageRef}>
            <FontAwesomeIcon icon={faCog}/>
            <div className="img" alt="" >
                <img src={getFromPublic(image)} alt="" />
            </div>
        </div>
    )
}