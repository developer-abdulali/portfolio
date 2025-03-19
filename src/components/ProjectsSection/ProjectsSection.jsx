import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../../constant/data";
import Spinner from "../Spinner/Spinner";
import ProjectCard from "../ProjectCard/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsSection = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });

    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulate a 2-second delay
    };

    fetchData();
  }, []);

  return (
    <section className="projects">
      <div className="container">
        <div
          className="project_titles"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>My Recent Works</h2>
          <p>
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>

        {/* Project Card */}
        <div className="projects_cards">
          {loading ? (
            <div className="flex flex-center wh_50">
              <Spinner data-aos="zoom-in" data-aos-duration="1500" />
            </div>
          ) : projectsData.length === 0 ? (
            <h1
              className="w-100 flex flex-center mt-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              No projects found. Please check back later.
            </h1>
          ) : (
            projectsData
              ?.slice(0, 4)
              ?.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  data-aos="flip-left"
                  data-aos-delay={index * 200}
                />
              ))
          )}
        </div>

        <div
          onClick={() => navigate("/projects")}
          className="project_buttons"
          style={{ marginTop: "10rem" }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <button>View More Projects</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
