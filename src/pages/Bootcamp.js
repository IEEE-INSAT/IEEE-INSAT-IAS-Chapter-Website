import React from 'react';
import Header from '../components/Header';
import TextLineReveal from '../components/TextLineReveal';
import '../styles/pages/bootcamp.scss'
import Bureau from './aboutus/Bureau';
import members from '../shared/db/bootcamp';
import HorGallery from '../components/HorGallery'
import ImageLoad from '../components/ImageLoad';
import { getFromPublic } from '../shared/functions/public';
import bootcamp_gallery from '../shared/db/bootcamp_gallery';
import Alexander from '../shared/components/AlexanderDeCroo';
 
export default function Bootcamp() {
    return (
        <div id="bootcamp">
            <Header>
                <TextLineReveal>
                    <h1> The Bootcamp </h1>
                </TextLineReveal>
                <TextLineReveal delay={200}>
                    <p>
                        We continue working to win more.
                    </p>
                </TextLineReveal>
            </Header>
            <div className="description">
                <video src="/images/bootcamp/about.mp4" controls></video>
                <div>
                    <h1 style={{ marginBottom: '20px' }}>The Bootcamp</h1>
                    <p>
                    IAS R8 INDUSTRIAL Bootcamp is an opportunity for students from different fields to test their teamwork, skills and creavity.It basically consists in a hackathon aiming to solve an industrial problem preceded by 3 days of training sessions delivered by qualified professionals .                    </p>
                </div>
            </div>

            <div style={{ backgroundColor: "var(--dark-background)" }}>
                <Alexander/>
            </div>

            <div className="gallery-container">
                <h1 className="presentation-title">This year's bootcamp gallery: </h1>
                <HorGallery>
                    {
                        bootcamp_gallery.map((img, index) => (
                            <ImageLoad key={index} src={getFromPublic(img)} className="gallery-image" alt="team building" />
                        ))
                    }
                </HorGallery>
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        </div>
    )
}
