import "./Home.css";
import { Link } from "react-router-dom";
import ProfilePic from "../../assets/home.jpg";
import { RiArrowRightLine } from "react-icons/ri";

const Home = () => {
  return (
    <section className="home-container grid">
      <img src={ProfilePic} alt="porfile" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">
          <span>I'm Abdul Ali</span> <br /> Web Developer
        </h1>

        <p className="home-description">
          I'm a Tunisian besed web designer & front-end developer focused on
          crafting clean & user-friendly experiences, I'm passionate about
          building excellent software that improves the lives of those around
          me.
        </p>

        <Link to="/about" className="button">
          More About Me
          <span className="button-icon">
            <RiArrowRightLine />
          </span>
        </Link>
      </div>

      <div className="color-block"></div>
    </section>
  );
};

export default Home;
