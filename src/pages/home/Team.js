import React, { useRef } from "react";

import "../../styles/pages/home/Team.scss";
import Tesla from "../../shared/components/Tesla";
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

// Removed unused Content function

export default function Team() {
  return (
    <div className="team">
      <Tesla />
    </div>
  );
}
