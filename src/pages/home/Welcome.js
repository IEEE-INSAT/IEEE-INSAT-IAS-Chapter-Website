import React from 'react'
import '../../styles/pages/home/Welcome.scss'

import TextLineReveal from '../../components/TextLineReveal'

export default function Welcome() {
    return (
        <div className="welcome">
            <div className="green-part">
                <TextLineReveal delay={100}>
                    <h1>Discover</h1>
                </TextLineReveal>
                <TextLineReveal delay={300}>
                <p>IEEE IAS Chapter</p>
                </TextLineReveal>
                <TextLineReveal delay={500}>
                <p>INSAT Student Branch</p>
                </TextLineReveal>
                <TextLineReveal delay={700}>
                <p>Linking Research To Practice</p>
                </TextLineReveal>
            </div>
        </div>
    )
}
