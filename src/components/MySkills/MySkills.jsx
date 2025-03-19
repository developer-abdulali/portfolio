import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { skillsData } from "../../constant/data";
import AOS from "aos";
import "aos/dist/aos.css";
import BreadCumbs from "../BreadCumbs/BreadCumbs";

const MySkills = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const displayedSkills = isHomePage ? skillsData.slice(0, 7) : skillsData;

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });

    document.title = "Abdul Ali - My Skills";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="myskills">
      <div className="container">
        {isHomePage ? (
          <div
            className="myskills_title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2>My Skills</h2>
            <p>
              Transforming your vision into reality, I specialize in crafting
              innovative web solutions that captivate audiences and drive
              success. With a blend of creativity and technical expertise, I
              deliver projects that stand out and make a lasting impact.
            </p>
          </div>
        ) : (
          <BreadCumbs h2Content="My Skills" page="Home" component="Skills" />
        )}

        <div className="myskills_cards">
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              className="mys_card"
              data-aos="flip-left"
              data-aos-delay={index * 150}
            >
              <div className="mys_inner">
                <img src={skill.image} alt={skill.name} />
              </div>
              <p className="text-center">{skill.name}</p>
            </div>
          ))}
        </div>
        {isHomePage && (
          <div
            onClick={() => navigate("/skills")}
            className="project_buttons"
            style={{ marginTop: "10rem" }}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <button>View All Skills</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MySkills;
