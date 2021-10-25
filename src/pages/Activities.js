import React, { useMemo, useState, useRef } from 'react'
import '../styles/pages/activities.scss'

import Header from '../components/Header'
import TextLineReveal from '../components/TextLineReveal'
import SpinImage from '../components/SpinImage'

import { getFromPublic } from '../shared/functions/public'
import useRevealOne from '../shared/hooks/useRevealOne'

import activities from '../shared/db/activities'
import { types } from '../shared/db/activities'

export default function Events() {
    const [current, setCurrent] = useState("training");

    const currentActiv = useMemo(()=>{
        return activities.filter(activity=>(activity.type===current));   
    },[current])

    

    return (
        <div className="activities">
            <Header>
                <TextLineReveal>
                    <h1> Activities </h1>
                </TextLineReveal>
                <TextLineReveal delay={200}>
                    <p>
                        Training, events, Industrial visits and projects  
                    </p>
                </TextLineReveal>
            </Header>
            <div className="navbar" style={{backgroundImage: `url('${getFromPublic("/images/backgrounds/it-research.jpg")}')`}}>
                {
                    types.map((type,index)=>(
                        <button 
                            className={(type===current)?"current":""} 
                            key={index}
                            onClick={()=>{setCurrent(type)}}
                        > {type} </button>
                    ))
                }
            </div>
            <div className="activities-container">
                <div className="container">
                    {currentActiv.map((activity,index)=>(
                        <div className="activity">
                            <SpinImage image={activity.image} width="370px" height='300px' />
                            <Content name={activity.title} description={activity.description} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Content({name, description}) {

    const contentRef = useRef(null);
    useRevealOne(contentRef);

    return (
        <div className="content" ref={contentRef}>
            <TextLineReveal>
                <h2> {name} </h2>
            </TextLineReveal>
            <p> {description} </p>
        </div>
    )
}