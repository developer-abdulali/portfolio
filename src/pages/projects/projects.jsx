import Spinner from "../../components/Spinner/Spinner";
import { projectsData } from "../../constant/data";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Abdul Ali - My Recent Works";
    window.scrollTo(0, 0);

    // Simulate a data fetching delay
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulate a 2-second delay
    };

    fetchData();
  }, []);

  return (
    <section className="projectpage">
      <div className="projects">
        <div className="container">
          <div className="project_titles">
            <h2>My Recent Works</h2>
            <p>
              Explore a collection of my latest projects, where creativity meets
              functionality. Each piece is crafted with precision to deliver
              exceptional user experiences and bring your digital visions to
              life.
            </p>
          </div>
          {/* Project Card */}
          <div className="projects_cards">
            {loading ? (
              <div className="flex flex-center wh_50">
                <Spinner />
              </div>
            ) : projectsData.length === 0 ? (
              <h1 className="w-100 flex flex-center mt-3">
                No projects found. Please check back later.
              </h1>
            ) : (
              projectsData?.map((project) => <ProjectCard project={project} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
