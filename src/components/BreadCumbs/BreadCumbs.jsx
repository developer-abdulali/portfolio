import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BreadCumbs = ({ h2Content, page, component }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);
  return (
    <div className="topservices" data-aos="fade-down">
      <div className="container">
        <h2>{h2Content}</h2>
        <p>
          {page} <span>&gt;</span> {component}
        </p>
      </div>
    </div>
  );
};

export default BreadCumbs;
