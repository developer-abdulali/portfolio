import { FaGraduationCap } from "react-icons/fa";
import { LuMedal } from "react-icons/lu";

const ExperienceStudy = () => {
  return (
    <section className="exstudy">
      <div className="container flex flex-left flex-sb">
        <div className="experience">
          <div className="experience_title flex gap-1">
            <LuMedal />
            <h2>My Experience</h2>
          </div>
          <div className="exper_cards">
            <div className="exper_card">
              {/* start - end time */}
              <span>2020 - Present</span>
              {/* company name  */}
              <h3>company name </h3>
              {/* role or position */}
              <p>React Developer</p>
            </div>
            <div className="exper_card">
              {/* start - end time */}
              <span>2020 - Present</span>
              {/* company name  */}
              <h3>company name </h3>
              {/* role or position */}
              <p>React Developer</p>
            </div>
            <div className="exper_card">
              {/* start - end time */}
              <span>2020 - Present</span>
              {/* company name  */}
              <h3>company name </h3>
              {/* role or position */}
              <p>React Developer</p>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="experience_title flex gap-1">
            <FaGraduationCap />
            <h2>My Qualification</h2>
          </div>
          <div className="exper_cards">
            <div className="exper_card">
              {/* start - end time */}
              <span>2020 - Present</span>
              {/* company name  */}
              <h3>company name </h3>
              {/* role or position */}
              <p>React Developer</p>
            </div>
            <div className="exper_card">
              {/* start - end time */}
              <span>2020 - Present</span>
              {/* company name  */}
              <h3>company name </h3>
              {/* role or position */}
              <p>React Developer</p>
            </div>
            <div className="exper_card">
              {/* start - end time */}
              <span>2020 - Present</span>
              {/* company name  */}
              <h3>company name </h3>
              {/* role or position */}
              <p>React Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExperienceStudy;
