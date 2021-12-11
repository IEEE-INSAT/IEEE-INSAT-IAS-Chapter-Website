import React from 'react'
import '../styles/components/event-show.scss'
import { getFromPublic } from '../shared/functions/public'
import { useShow } from "../shared/contexts/EsShow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function EventShow() {

    const { esShow,esShowed,stopShow } = useShow()

    const {
        title, 
        status,
        description, 
        image,
        additions
    } = esShow; 

    const shownClass = esShowed?"shown-event": ""

    return (
        <>
        <img src={getFromPublic(image)} alt="" className={"event-show-image "+shownClass} />
        <div className={"event-show-content "+ shownClass}>
            <h1> {title} </h1>
            <small className={status}> {status} </small>
            <p> {description} </p>
            {additions?additions.map(addition=>(
                <p> {addition} </p>
            )):''}
        </div>
        <FontAwesomeIcon 
            icon={faTimes} 
            className={"event-show-close-button "+shownClass}
            onClick={()=>{stopShow()}}
        />
        
        </>
    )
}
