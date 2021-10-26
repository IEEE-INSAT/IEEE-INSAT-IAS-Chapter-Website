import React, { useRef } from 'react'
import useRevealOne from '../../shared/hooks/useRevealOne'

export default function Card({title,image,text}) {

    const cardRef = useRef();
    useRevealOne(cardRef);

    return (
        <div className="card" ref={cardRef}>
            <span className="image-contain">
                <img src={image} alt="" />
            </span>
            <h3> {title} </h3>
            <p> {text} </p>
        </div>
    )
}
