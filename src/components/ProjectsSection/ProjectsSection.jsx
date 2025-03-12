import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../../constant/data";
import Spinner from "../Spinner/Spinner";

const ProjectsSection = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a data fetching delay
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
        <div className="project_titles">
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
              <Spinner />
            </div>
          ) : projects.length === 0 ? (
            <h1 className="w-100 flex flex-center mt-3">
              No projects found. Please check back later.
            </h1>
          ) : (
            projects?.slice(0, 4)?.map((project) => (
              <Link to="/" key={project?._id} className="procard">
                <div className="proimgbox">
                  <img src={project?.img} alt={project?.name} />
                </div>
                <div className="procontentbox">
                  <h2>{project?.name}</h2>
                  <GoArrowUpRight />
                </div>
              </Link>
            ))
          )}
        </div>

        <div
          onClick={() => navigate("/projects")}
          className="project_buttons"
          style={{ marginTop: "10rem" }}
        >
          <button>View More Projects</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
