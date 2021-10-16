import React from 'react'
import Header from '../components/Header'
import '../styles/pages/about-us.scss'
import Bureau from './aboutus/Bureau'
import Information from './aboutus/Information'
import Know from './aboutus/Know'
import Contact from '../components/Contact'

export default function AboutUs() {
    return (
        <div className="about-us">
            <Header>
                <h1> IEEE IAS </h1>
                <p> Connect Yourself to the Industry Professionals in Electrical and Electronic Engineering </p>
            </Header>
            <Information/>
            <Know/>
            <Bureau/>
            <Contact/>
        </div>
    )
}
