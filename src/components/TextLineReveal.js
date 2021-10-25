import React, { useRef } from 'react'
import useRevealOne from '../shared/hooks/useRevealOne';
import '../styles/components/text-line-reveal.scss'

export default function TextLineReveal({children, delay=0}) {

    const lineRef = useRef(null); 

    useRevealOne(lineRef,{rootMargin: "-100px 0px -100px 0px"})

    return (
        <div id="text-line-reveal" ref={lineRef}>
            <div style={{
                transitionDelay: `${delay}ms`,
                padding: '4px 0'
            }}>
                {children}
            </div>
        </div>
    )
}
