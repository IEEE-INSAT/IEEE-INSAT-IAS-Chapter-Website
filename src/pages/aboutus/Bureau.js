import React from 'react'
import '../../styles/pages/aboutus/bureau.scss'
import MemberImage from '../../components/MemberImage'
import members from '../../shared/db/Bureau'

const chair = {
    name: "Omar Kouki",
    position:"Chair",
    facebook: "#",
    linkedin: "#",
    image: '/images/pictures/members/chair.jpg'
}


export default function Bureau() {
    return (
        <div className="bureau">
            <h1 className="title">MEET THE TEAM</h1>
            <br />
            <div className="container">
                <MemberImage {...chair} />
                {
                    members.map(double=>(
                        <div className="double">
                            <MemberImage {...double[0]} />
                            <MemberImage {...double[1]} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
