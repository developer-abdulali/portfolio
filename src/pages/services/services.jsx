import React, { useEffect } from "react";
import { servicesData } from "../../constant/data";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCumbs from "../../components/BreadCumbs/BreadCumbs";

const Service = ({ number, title, Icon, points, description, index }) => (
  <div
    className="csservice"
    data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
    data-aos-delay={index * 150}
  >
    <span>{number}</span>
    <div>
      <h2>{title}</h2>
      <Icon size={50} />
    </div>
    <ul>
      {points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
    <p>{description}</p>
  </div>
);

const Services = () => {
  useEffect(() => {
    document.title = "Abdul Ali - My Services";
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="servicespage">
      {/* Top Section */}
      <BreadCumbs h2Content="My Services" page="Home" component="Services" />

      {/* Services List */}
      <div className="centerservices">
        <div className="container">
          <div className="cservicesbox" data-aos="zoom-in">
            {servicesData?.map((service, index) => (
              <Service key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
