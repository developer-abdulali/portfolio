import { useState } from "react";
import { services } from "../../constant/data";
import { GoArrowUpRight } from "react-icons/go";

const ServicesSection = () => {
  //active service bg color
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => setActiveIndex(index);

  const handleMouseOut = () => setActiveIndex(0);

  return (
    <section className="services">
      <div className="container">
        <div className="services_titles">
          <h2>My Quality Services</h2>
          <p>
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>
        <div className="services_menu">
          {services?.map((service, i) => (
            <div
              key={i}
              onMouseOver={() => handleHover(i)}
              onMouseDown={handleMouseOut}
              className={`services_item ${activeIndex === i ? "sactive" : ""}`}
            >
              <div className="left_s_box">
                <span>0{i + 1}</span>
                <span>{service?.title}</span>
              </div>
              <div className="right_s_box">
                <p>{service?.description}</p>
              </div>
              <GoArrowUpRight />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
