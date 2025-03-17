import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { skillsData } from "../../constant/data";

const MySkills = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const displayedSkills = isHomePage ? skillsData.slice(0, 7) : skillsData;

  useEffect(() => {
    document.title = "Abdul Ali - My Skills";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="myskills">
      <div className="container">
        <div className="myskills_title">
          <h2>My Skills</h2>
          <p>
            Transforming your vision into reality, I specialize in crafting
            innovative web solutions that captivate audiences and drive success.
            With a blend of creativity and technical expertise, I deliver
            projects that stand out and make a lasting impact.
          </p>
        </div>
        <div className="myskills_cards">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="mys_card">
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
          >
            <button>View All Skills</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MySkills;
