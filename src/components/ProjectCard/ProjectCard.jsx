import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/project/${project?._id}`}
      key={project?._id}
      className="procard"
    >
      <div className="proimgbox" data-aos="zoom-in" data-aos-duration="800">
        <img src={project?.img} alt={project?.name} />
      </div>
      <div className="procontentbox">
        <h2>{project?.name}</h2>
        <GoArrowUpRight />
      </div>
    </Link>
  );
};

export default ProjectCard;
