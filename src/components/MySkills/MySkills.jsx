import { useNavigate } from "react-router-dom";

const MySkills = () => {
  const navigate =useNavigate()
  return (
    <section className="myskills">
      <div className="container">
        <div className="myskills_title">
          <h2>My Skills</h2>
          <p>
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>
        <div className="myskills_cards">
          <div className="mys_card">
            <div className="mys_inner">
              <img src="/img/mongodb.svg" alt="mongodb" />
              <h3>92%</h3>
            </div>
            <p className="text-center">MongoDB</p>
          </div>
          <div className="mys_card">
            <div className="mys_inner">
              <img src="/img/mongodb.svg" alt="mongodb" />
              <h3>92%</h3>
            </div>
            <p className="text-center">MongoDB</p>
          </div>
          <div className="mys_card">
            <div className="mys_inner">
              <img src="/img/mongodb.svg" alt="mongodb" />
              <h3>92%</h3>
            </div>
            <p className="text-center">MongoDB</p>
          </div>
          <div className="mys_card">
            <div className="mys_inner">
              <img src="/img/mongodb.svg" alt="mongodb" />
              <h3>92%</h3>
            </div>
            <p className="text-center">MongoDB</p>
          </div>
        </div>
        <div
          onClick={() => navigate("/skills")}
          className="project_buttons"
          style={{ marginTop: "10rem" }}
        >
          <button>View All Skills</button>
        </div>
      </div>
    </section>
  );
};
export default MySkills;
