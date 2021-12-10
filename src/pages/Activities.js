import React, { useMemo, useState, useRef } from 'react'
import '../styles/pages/activities.scss'

import Header from '../components/Header'
import TextLineReveal from '../components/TextLineReveal'
// import SpinImage from '../components/SpinImage'

import { getFromPublic } from '../shared/functions/public'
import useRevealOne from '../shared/hooks/useRevealOne'

import activities from '../shared/db/activities'
import HorGallery from './activities/HorGallery'
import gallery from '../shared/db/gallery'
import thisyear from '../shared/db/thisyear'
import { types } from '../shared/db/activities'
import { useShow } from "../shared/contexts/EsShow";
import ImageLoad from '../components/ImageLoad'
import Tesla from '../shared/components/Tesla'

export default function Events() {
    const [current, setCurrent] = useState("training");

    const currentActiv = useMemo(()=>{
        return activities.filter(activity=>(activity.type===current));   
    },[current])

    const {triggerShow} = useShow();

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
            <div className="gallery-container">
                <h1 className="presentation-title">Team Buildings Gallery: </h1>
                <HorGallery>
                    {
                        gallery.map((img,index)=>(
                            <ImageLoad key={index} src={getFromPublic(img)} className="gallery-image" alt="team building" />
                        ))
                    }
                </HorGallery>
                <br />
                <br />

                <h1 className="presentation-title">This year's events: </h1>
                <HorGallery>
                    {
                        thisyear.map(({
                            title,
                            image,  
                            status,
                            description
                        },index)=>(
                            <div className="gallery-card" key={index}
                                onClick={()=>{
                                    triggerShow({title,image, status,description})
                                }}
                            >
                                <ImageLoad spinColor="grey"  src={getFromPublic(image)} alt="activity" className="gallery-card-img" />
                                <div className="content">
                                    <h3> {title} </h3>
                                    <small className={status}> {status} </small>
                                    <p> {description.substring(0,100)}... </p>
                                </div>
                            </div>
                        ))
                    }
                </HorGallery>

                <br />
                <br />

            </div>
            <div style={{backgroundColor: "var(--dark-background)"}}>
                <Tesla/>
            </div>
            
            <div className="navbar" style={{backgroundImage: `url('${getFromPublic("/images/backgrounds/industry4.jpg")}')`}}>
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
                <div className="container" key={current}>
                    {currentActiv.map((activity,index)=>(
                        <div className="activity" key={index}>
                            <ImageLoad src={activity.image} width="370px" height='300px' className="activity-image" alt="activity" />
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