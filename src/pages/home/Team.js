import React,{ useRef } from 'react'

import '../../styles/pages/home/Team.scss'
import Tesla from '../../shared/components/Tesla'
import SpinImage from '../../components/SpinImage'
import useRevealOne from '../../shared/hooks/useRevealOne'
import TextLineReveal from '../../components/TextLineReveal'


const working_members = [
    {
        name: "Farah Zhioua",
        quote : "I believe that making a change or bringing success is possible only after grabbing the opportunity when it comes and the thing I appreciate most about IEEE is that it has given me the opportunity to grow and balance between studies, work and life.",
        image: "/images/pictures/members/farah zhioua .png"
    },
    {
        name: "Fares Sobhi",
        quote : "I met a lot of people, learnt a lot and developped my hard skills as well as my softs skills and all that thanks to the benefits and opportunities given by IAS.",
        image: "/images/pictures/members/fares sobhi .png"
    },
    {
        name: "Hamza Rezgui",
        quote : "Don't stop until you're proud",
        image: "/images/pictures/members/hamza rezgui.png"
    },

]

function Content({name, quote}) {

    const contentRef = useRef(null);
    useRevealOne(contentRef);

    return (
        <div className="content" ref={contentRef}>
            <TextLineReveal>
                <h2> {name} </h2>
            </TextLineReveal>
            <p> {quote} </p>
        </div>
    )
}


export default function Team() {

    const titleRef = useRef()

    useRevealOne(titleRef);

    return (
        
        <div className="team">
            
            {
                <>
                <Tesla/>
                <div style={{
                    width:'100%',height: '30vh',
                    display:'flex', 
                    justifyContent:'center', alignItems:'center'
                }}>
                    <h1 className="title" ref={titleRef}>
                        STARS OF THE MONTH
                    </h1>
                </div>
                {working_members.map(({name,quote,image},index)=>(
                    <div className={`member ${(index%2)?"inverse":""}`} key={index}>
                        <div className="container">
                            <SpinImage image={image} />
                            <Content name={name} quote={quote} />
                        </div>
                    </div>
                ))}
                </>
            }
        </div>
    )
}
