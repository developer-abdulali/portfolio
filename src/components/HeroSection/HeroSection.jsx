import { Link } from "react-router-dom";
import { BiDownload } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="intro_text">
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" textAnchor="middle" className="animate-stroke">
            HI
          </text>
        </svg>
      </div>
      <div className="container">
        <div className="flex w-100">
          <div className="heroinfoleft">
            <span className="hero_sb_title">I am Abdul Ali</span>
            <h1 className="hero_title">
              Web Developer + <br />{" "}
              <span className="typed-text">React Developer</span>
            </h1>
            <div className="hero_img_box heroimgbox">
              <img src="/img/mypic.jpg" alt="coder" />
            </div>
            <div className="lead">
              I break down complex user experience problems to create integrity
              focused solutions that connect billions of people.
            </div>
            <div className="hero_btn_box">
              <Link to={"/"} className="download_cv">
                Download Cv <BiDownload />
              </Link>
              <ul className="hero_social">
                <li>
                  <Link to={"/"} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://linkedin.com/in/abdulali12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrLinkedinOption />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://github.com/developer-abdulali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://facebook.com/abdulalisoomro2k23"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* right side img section */}
          <div className="heroimgright">
            <div className="hero_img_box">
              <img src="/img/mypic.jpg" alt="coder" />
            </div>
          </div>
        </div>

        <div className="funfect_area flex flex-sb">
          <div className="funfect_item">
            <h3>2</h3>
            <h4>
              Year of <br /> Experience
            </h4>
          </div>
          <div className="funfect_item">
            <h3>10+</h3>
            <h4>
              Projects <br /> Completed
            </h4>
          </div>
          <div className="funfect_item">
            <h3>1+</h3>
            <h4>
              Year of <br /> Experience
            </h4>
          </div>
          <div className="funfect_item">
            <h3>1+</h3>
            <h4>
              Year of <br /> Experience
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
