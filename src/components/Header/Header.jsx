import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMoonSharp } from "react-icons/io5";
import { LuSun, LuSunMoon } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [mobile, setMobile] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setClicked(false);
  };

  // update active link state when page reload
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  // check local storage for dark mode preference on initial load
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  // apply dark mode styles when darkmode state changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", true);
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", false);
    }
  }, [darkMode]);

  // toggle dark mode fuction
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <nav className="container flex flex-sb">
        {/* large screen content */}
        <div className="logo flex gap-2">
          <Link to="/">Abdul Ali</Link>
        </div>

        <div className="navlist flex gap-2">
          <ul className="flex gap-2">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div onClick={toggleDarkMode} className="darkmodetoggle">
            {darkMode ? <IoMoonSharp /> : <LuSun />}
          </div>

          <button>
            <Link to="/contact">Hire Me!</Link>
          </button>

          <div onClick={() => setMobile(!mobile)} className="mobiletogglesvg">
            <HiMiniBars3BottomRight />
          </div>
        </div>

        {/* small screen content */}
        <div className={mobile ? "mobilenavlist active" : "mobilenavlist"}>
          <span
            onClick={() => setMobile(false)}
            className={mobile ? "active" : ""}
          ></span>
          <div className="mobilelogo">
            <h2>Abdul Ali</h2>
          </div>
          <ul
            onClick={() => setMobile(false)}
            className="flex gap-1 flex-col flex-left mt-3"
          >
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className={activeLink === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={() => handleLinkClick("/skills")}
                className={activeLink === "/skills" ? "active" : ""}
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                onClick={() => handleLinkClick("/services")}
                className={activeLink === "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => handleLinkClick("/projects")}
                className={activeLink === "/projects" ? "active" : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => handleLinkClick("/contact")}
                className={activeLink === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
          <p>Copyright &copy; 2025 | Abdul Ali</p>
        </div>
      </nav>
    </header>
  );
}
