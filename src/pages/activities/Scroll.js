import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

import awards from '../../shared/db/awards'
import useRevealOne from '../../shared/hooks/useRevealOne'




export default function Scroll() {
    return (
        <div className="scroll">
            {awards.map((award,index) =>(
                <div key={index} className="whole-width">
                    <OneSide {...award} />
                </div>
            ))}
            <Line/>
        </div>
    )
}

function OneSide({title, description}){

    const myRef = useRef()
    useRevealOne(myRef,{threshold:0.8})

    return(
        <div className="one-side" ref={myRef}>
            <h2> {title} </h2>
            <p> {description} </p>
        </div>
    )
}

function Line() {
    return (
        <div className="line">
            {
                awards.map(award=>(
                    <Trophy/>
                ))
            }
        </div>
    )
}

function Trophy(){
    const myRef = useRef()
    useRevealOne(myRef,{threshold:0.8})
    return (
        <div className="trophy" ref={myRef}>
            <div className="trophy-circle">
                <span className="svg">
                    <FontAwesomeIcon icon={faTrophy}/>
                </span>
            </div>
        </div>
    )
}