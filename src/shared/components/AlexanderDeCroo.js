import React, { useEffect, useRef } from "react";
import "../../styles/components/Tesla.scss";
import { getFromPublic } from "../functions/public";

export default function Alexander() {
  const pageRef = useRef();

  useEffect(() => {
    const current = pageRef.current;

    const options = {
      threshold: 0.8,
    };
    const inters = new IntersectionObserver((entries, observe) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, options);

    inters.observe(current);

    return () => {
      inters.disconnect(current);
    };
  }, []);

  return (
    <div className="tesla" ref={pageRef}>
      <div className="container">
        <div>
          <img
            src={getFromPublic("/images/pictures/events/alexanderDeCroo.jpg")}
            alt=""
          />
          <div className="content">
            <p className="tesla-quote">
              {" "}
              Every industrial revolution brings along a learning revolution.{" "}
            </p>
            <p className="tesla-name">--Alexander De Croo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
