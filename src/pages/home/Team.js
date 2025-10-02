import React, { useRef } from "react";

import "../../styles/pages/home/Team.scss";
import Tesla from "../../shared/components/Tesla";
import SpinImage from "../../components/SpinImage";
import useRevealOne from "../../shared/hooks/useRevealOne";
import TextLineReveal from "../../components/TextLineReveal";

const working_members = [
  {
    name: "Farah Zhioua",
    image: "/images/pictures/members/farah zhioua .png",
  },
  {
    name: "Fares Sobhi",
    image: "/images/pictures/members/fares sobhi .png",
  },
  {
    name: "Hamza Rezgui",
    image: "/images/pictures/members/hamza rezgui.png",
  },
];

function Content({ name, quote }) {
  const contentRef = useRef(null);
  useRevealOne(contentRef);

  return (
    <div className="content" ref={contentRef}>
      <TextLineReveal>
        <h2> {name} </h2>
      </TextLineReveal>
      <p> {quote} </p>
    </div>
  );
}

export default function Team() {
  return (
    <div className="team">
      <Tesla />
    </div>
  );
}
