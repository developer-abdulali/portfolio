import { FaGraduationCap } from "react-icons/fa";
import { LuMedal } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ExperienceStudy = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="exstudy">
      <div className="container flex flex-left flex-sb">
        <div
          className="experience"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div
            className="experience_title flex gap-1"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <LuMedal />
            <h2>My Experience</h2>
          </div>
          <div className="exper_cards">
            <div className="exper_card" data-aos="zoom-in" data-aos-delay="200">
              <span>2020 - Present</span>
              <h3>Company Name</h3>
              <p>React Developer</p>
            </div>
            <div className="exper_card" data-aos="zoom-in" data-aos-delay="400">
              <span>2020 - Present</span>
              <h3>Company Name</h3>
              <p>React Developer</p>
            </div>
            <div className="exper_card" data-aos="zoom-in" data-aos-delay="600">
              <span>2020 - Present</span>
              <h3>Company Name</h3>
              <p>React Developer</p>
            </div>
          </div>
        </div>
        <div
          className="experience"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div
            className="experience_title flex gap-1"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <FaGraduationCap />
            <h2>My Qualification</h2>
          </div>
          <div className="exper_cards">
            <div className="exper_card" data-aos="zoom-in" data-aos-delay="200">
              <span>2020 - Present</span>
              <h3>Institution Name</h3>
              <p>Degree or Certification</p>
            </div>
            <div className="exper_card" data-aos="zoom-in" data-aos-delay="400">
              <span>2020 - Present</span>
              <h3>Institution Name</h3>
              <p>Degree or Certification</p>
            </div>
            <div className="exper_card" data-aos="zoom-in" data-aos-delay="600">
              <span>2020 - Present</span>
              <h3>Institution Name</h3>
              <p>Degree or Certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceStudy;
