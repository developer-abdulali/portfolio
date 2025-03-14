import React from "react";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../../constant/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((project) => project._id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="projectslug">
      <div className="projectslugimg">
        <div className="container">
          <div className="proslugimg">
            <img src={project.img} alt={project.name} />
          </div>

          <div className="projectsluginfo">
            <div className="leftmainproinfo">
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <Link to={project.website} target="_blank">
                Live Preview
              </Link>
            </div>
          </div>

          <div className="projectslugsliderimg">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`${project.name} - ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
