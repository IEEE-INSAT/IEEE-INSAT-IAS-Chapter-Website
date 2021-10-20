import React, { useRef } from 'react'
import '../../styles/pages/aboutus/bureau.scss'
import MemberImage from '../../components/MemberImage'
import members from '../../shared/db/Bureau'
import useRevealOne from '../../shared/hooks/useRevealOne'

const chair = {
    name: "Omar Kouki",
    position:"Chair",
    facebook: "#",
    linkedin: "#",
    image: '/images/pictures/members/chair.jpg'
}


export default function Bureau() {

    const titleRef = useRef(null); 

    useRevealOne(titleRef)

    return (
        <div className="bureau">
            <h1 className="title" ref={titleRef}>MEET THE TEAM</h1>
            <br />
            <div className="double container">
                <MemberImage {...chair} />
            </div>
            {
                members.map(double=>(
                    <div className="double container">
                        <MemberImage {...double[0]} />
                        <MemberImage {...double[1]} />
                    </div>
                ))
            }
        </div>
    )
}
