import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../../constant/data";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData?.find((project) => project._id === id);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    if (project) {
      document.title = `${project.name} - Project Details`;
    } else {
      document.title = "Project Not Found";
    }
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="projectslug">
      <div className="projectslugimg" data-aos="fade-up">
        <div className="container">
          <div className="proslugimg" data-aos="zoom-in">
            <img src={project.img} alt={project.name} />
          </div>

          <div className="projectsluginfo" data-aos="fade-left">
            <div className="leftmainproinfo">
              <h1 data-aos="fade-right">{project.name}</h1>
              <p data-aos="fade-up">{project.description}</p>
              <Link to={project.website} target="_blank" data-aos="fade-up">
                Live Preview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
