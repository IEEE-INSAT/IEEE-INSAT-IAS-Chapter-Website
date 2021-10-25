import React from 'react'
import '../styles/pages/awards.scss'

import Header from '../components/Header'
import TextLineReveal from '../components/TextLineReveal'
import Scroll from './activities/Scroll'

export default function Awards() {

    return (
        <div className="awards">
            <Header>
                <TextLineReveal>
                    <h1> Awards </h1>
                </TextLineReveal>
                <TextLineReveal delay={200}>
                    <p>
                        We continue working to win more.  
                    </p>
                </TextLineReveal>
            </Header>
            <Scroll/>
        </div>
    )
}
