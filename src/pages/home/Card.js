import React, { useRef } from 'react'
import useRevealOneTime from '../../shared/hooks/useRevealOneTime'

export default function Card({title,image,text}) {

    const cardRef = useRef();
    useRevealOneTime(cardRef);

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
