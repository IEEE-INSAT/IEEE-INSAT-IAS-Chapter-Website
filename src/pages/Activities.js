import React from "react";
import "../styles/pages/activities.scss";

import Header from "../components/Header";
import TextLineReveal from "../components/TextLineReveal";
// import SpinImage from '../components/SpinImage'

import { getFromPublic } from "../shared/functions/public";

import HorGallery from "../components/HorGallery";
import gallery from "../shared/db/gallery";
import thisyear from "../shared/db/thisyear";
import { useShow } from "../shared/contexts/EsShow";
import ImageLoad from "../components/ImageLoad";
import Tesla from "../shared/components/Tesla";

function Activities() {
  const { triggerShow } = useShow();

  return (
    <div className="activities">
      <Header>
        <TextLineReveal>
          <h1> Activities </h1>
        </TextLineReveal>
        <TextLineReveal delay={200}>
          <p>Training, events, Industrial visits and projects</p>
        </TextLineReveal>
      </Header>
      <div className="gallery-container">
        <h1 className="presentation-title">Gallery: </h1>
        <HorGallery>
          {gallery.map((img, index) => (
            <ImageLoad
              key={index}
              src={getFromPublic(img)}
              className="gallery-image"
              alt="team building"
            />
          ))}
        </HorGallery>
        <br />
        <br />

        <h1 className="presentation-title">This year's events: </h1>
        <HorGallery>
          {thisyear.map(
            ({ title, image, status, description, additions }, index) => (
              <div
                className="gallery-card"
                key={index}
                onClick={() => {
                  triggerShow({ title, image, status, description, additions });
                }}
              >
                <ImageLoad
                  spinColor="grey"
                  src={getFromPublic(image)}
                  alt="activity"
                  className="gallery-card-img"
                />
                <div className="content">
                  <h3> {title} </h3>
                  <small className={status}> {status} </small>
                  <p> {description.substring(0, 100)}... </p>
                </div>
              </div>
            )
          )}
        </HorGallery>

        <br />
        <br />
      </div>
      <div style={{ backgroundColor: "var(--dark-background)" }}>
        <Tesla />
      </div>
    </div>
  );
}

export default Activities;
