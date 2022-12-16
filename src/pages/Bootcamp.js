import React from 'react';
import Header from '../components/Header';
import TextLineReveal from '../components/TextLineReveal';
import '../styles/pages/bootcamp.scss'
import Tesla from '../shared/components/Tesla';
import Bureau from './aboutus/Bureau';
import members from '../shared/db/bootcamp';
import HorGallery from '../components/HorGallery'
import ImageLoad from '../components/ImageLoad';
import { getFromPublic } from '../shared/functions/public';
import bootcamp_gallery from '../shared/db/bootcamp_gallery';
 
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
                        IAS Bootcamp is an opportunity for students from different fields to test their teamwork, skills and creavity.
                        It consists of training sessions delivered by qualified professionals and of the project develepment phase. The jury will choose the winners.
                    </p>
                </div>
            </div>

            <div style={{ backgroundColor: "var(--dark-background)" }}>
                <Tesla />
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
            <Bureau members={members} name="COMMITTEE" />
        </div>
    )
}
