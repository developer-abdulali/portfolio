import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footersec flex flex-center flex-col gap-2">
          <div className="logo flex gap-2">
            <Link to="/">Abdul Ali</Link>
          </div>
          <div className="ul flex gap-2">
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/">Resume</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
          <ul className="hero_social">
            <li>
              <Link
                to={"https://twitter.com/ab_ali2k23"}
                target="_blank"
                rel="noopener noreferrer"
              >
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
          <div className="copyrights">
            &copy; 2025 All Rights Are Reserved By <span>Abdul Ali</span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
