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
          {/* Experience section */}
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
              <span>Aug 2024 - Present</span>
              <h3>Dot Escapists</h3>
              <p>React Developer</p>
            </div>
            <div className="exper_card" data-aos="zoom-in" data-aos-delay="200">
              <span>Jan 2024 - Jul 2024</span>
              <h3>New Alpha General Transport</h3>
              <p>Frontend React Developer</p>
            </div>
            <div className="exper_card" data-aos="zoom-in" data-aos-delay="400">
              <span>Jan 2024 - Jan 2024</span>
              <h3>IG Tech Services</h3>
              <p>React Developer</p>
            </div>
            <div className="exper_card" data-aos="zoom-in" data-aos-delay="600">
              <span>Aug 2023 - Oct 2023</span>
              <h3>CodeSoft</h3>
              <p>Web Development (Intern)</p>
            </div>
          </div>
        </div>
        {/* Qualification section */}
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
              <span>2019 - 2023</span>
              <h3>Shah Abdul Latif University, Khairpur</h3>
              <p>Bachelor in Computer Science</p>
            </div>
            <div className="exper_card" data-aos="zoom-in" data-aos-delay="400">
              <span>2022 - 2023</span>
              <h3>Sindh Commercial Centre, Shikarpur</h3>
              <p>Diploma in Information Technology (D.I.T)</p>
            </div>
            <div className="exper_card" data-aos="zoom-in" data-aos-delay="600">
              <span>2020 - Present</span>
              <h3>C&S Govt Degree College Shikarpur</h3>
              <p>F.S.C</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceStudy;
