import React,{ useRef } from 'react'

import '../../styles/pages/home/Team.scss'
import Tesla from '../../shared/components/Tesla'
import SpinImage from '../../components/SpinImage'
import useRevealOne from '../../shared/hooks/useRevealOne'
import TextLineReveal from '../../components/TextLineReveal'


const working_members = [
    {
        name: "Farah Zhioua",
        image: "/images/pictures/members/farah zhioua .png"
    },
    {
        name: "Fares Sobhi",
        image: "/images/pictures/members/fares sobhi .png"
    },
    {
        name: "Hamza Rezgui",
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
                        <div className="container" style={{
                    display:'flex', 
                    justifyContent:'center',
                    alignItems:'center'
                }}>
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
