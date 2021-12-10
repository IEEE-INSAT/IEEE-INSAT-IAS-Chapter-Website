import React, { useRef } from 'react'
import '../../styles/pages/aboutus/bureau.scss'
import MemberImage from '../../components/MemberImage'
import members from '../../shared/db/Bureau'
import useRevealOne from '../../shared/hooks/useRevealOne'


export default function Bureau() {

    const titleRef = useRef(null); 

    useRevealOne(titleRef)

    return (
        <div className="bureau">
            <h1 className="title" ref={titleRef}>MEET THE TEAM</h1>
            <br />
            {
                members.map((double,index)=>(
                    <div className="double container" key={index}>
                        <MemberImage {...double[0]} />
                        {double[1]?<MemberImage {...double[1]} />:''}
                    </div>
                ))
            }
        </div>
    )
}
