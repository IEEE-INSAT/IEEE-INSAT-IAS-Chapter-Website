import React,{ useRef } from 'react'

import '../../styles/pages/home/Team.scss'
import Tesla from '../../shared/components/Tesla'
import SpinImage from '../../components/SpinImage'
import useRevealOne from '../../shared/hooks/useRevealOne'
import TextLineReveal from '../../components/TextLineReveal'


const working_members = [
    {
        name: "Omar Kouki",
        quote : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: "/images/pictures/members/chair.jpg"
    },
    {
        name: "Maryem Abdellatif",
        quote : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: "/images/pictures/members/HRManager.jpg"
    },
    {
        name: "Mohamed Jedidi",
        quote : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: "/images/pictures/members/trainingManager.jpg"
    }
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
    return (
        <div className="team">
            {
                <>
                <Tesla/>
                {working_members.map(({name,quote,image},index)=>(
                    <div className={`member ${(index%2)?"inverse":""}`}>
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
