import { useState } from "react";
import { servicesData } from "../../constant/data";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  // Active service bg color
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => setActiveIndex(index);

  const handleMouseOut = () => setActiveIndex(0);

  return (
    <section className="services">
      <div className="container">
        <div className="services_titles">
          <h2>My Quality Services</h2>
          <p>
            Experience the transformation of your ideas into stunning web
            solutions. I craft each project with precision and passion,
            delivering exceptional results that inspire and captivate your
            audience.
          </p>
        </div>
        <div className="services_menu">
          {servicesData.slice(0, 4).map((service, i) => (
            <div
              key={i}
              onMouseOver={() => handleHover(i)}
              onMouseOut={handleMouseOut}
              className={`services_item ${activeIndex === i ? "sactive" : ""}`}
            >
              <div className="left_s_box">
                <span>{service.number}</span>
                <span>{service.title}</span>
              </div>
              <div className="right_s_box">
                <p>{service.description}</p>
              </div>
              <GoArrowUpRight />
            </div>
          ))}
        </div>
      </div>

      <div
        onClick={() => navigate("/services")}
        className="project_buttons"
        style={{ marginTop: "8rem" }}
      >
        <button>View All Services</button>
      </div>
    </section>
  );
};

export default ServicesSection;
