import React, { useEffect } from "react";
import { servicesData } from "../../constant/data";

const Service = ({ number, title, Icon, points, description }) => (
  <div className="csservice">
    <span>{number}</span>
    <div>
      <h2>{title}</h2>
      <Icon size={50} />
    </div>
    <ul>
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    <p>{description}</p>
  </div>
);

const Services = () => {
  useEffect(() => {
    document.title = "Abdul Ali - My Services";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="servicespage">
      <div className="topservices">
        <div className="container">
          <h2>My Services</h2>
          <p>
            Home <span>&gt;</span> Services
          </p>
        </div>
      </div>
      <div className="centerservices">
        <div className="container">
          <div className="cservicesbox">
            {servicesData?.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
