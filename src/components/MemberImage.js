import React, { useRef } from "react";
import { getFromPublic } from "../shared/functions/public";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/member-image.scss";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import useRevealOneTime from "../shared/hooks/useRevealOneTime";

export default function MemberImage({
  name,
  position,
  facebook,
  linkedin,
  instagram,
  image,
}) {
  const memberRef = useRef(null);

  //changing class when revealed
  useRevealOneTime(memberRef);

  return (
    <div className="bureau-member" ref={memberRef}>
      <div className="image">
        <FontAwesomeIcon icon={faCog} />
        <div className="img" alt="">
          <img src={getFromPublic(image)} alt="" />
          <div className="content">
            <h2> {name} </h2>
            <p> {position} </p>
            <div className="links">
              {facebook && (
                <a href={facebook} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
