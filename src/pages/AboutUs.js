import React from 'react'
import Header from '../components/Header'
import '../styles/pages/about-us.scss'
import Bureau from './aboutus/Bureau'
import Information from './aboutus/Information'
import Know from './aboutus/Know'
import Contact from '../components/Contact'
import TextLineReveal from '../components/TextLineReveal'
import members from '../shared/db/Bureau'

export default function AboutUs() {
    return (
        <div className="about-us">
            <Header>
                <TextLineReveal><h1> IEEE IAS </h1></TextLineReveal>
                <TextLineReveal delay={300}> <p> Connect Yourself to the Industry Professionals in Electrical and Electronic Engineering </p></TextLineReveal>
            </Header>
            <Information/>
            <Know/>
            <Bureau members={members} name="TEAM"/>
            <Contact/>
        </div>
    )
}
 