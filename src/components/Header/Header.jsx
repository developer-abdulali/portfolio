import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMoonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import ScrollProgressBar from "../ScrollProgressBar/ScrollProgressBar";

// NavLink Component
const NavLink = ({ to, children, activeLink, onClick }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={() => onClick(to)}
        className={activeLink === to ? "active" : ""}
      >
        {children}
      </Link>
    </li>
  );
};

const Header = () => {
  const { pathname } = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [mobile, setMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setClicked(false);
  };

  // Update active link state when page reload
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  // Check local storage for dark mode preference on initial load
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  // Apply dark mode styles when darkmode state changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", true);
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", false);
    }
  }, [darkMode]);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? "sticky" : ""}>
      <ScrollProgressBar />
      <nav className="container flex flex-sb">
        {/* Large screen content */}
        <div className="logo flex gap-2">
          <Link to="/">Abdul Ali</Link>
        </div>

        <div className="navlist flex gap-2">
          <ul className="flex gap-2">
            <NavLink to="/" activeLink={activeLink} onClick={handleLinkClick}>
              Home
            </NavLink>
            <NavLink
              to="/services"
              activeLink={activeLink}
              onClick={handleLinkClick}
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              activeLink={activeLink}
              onClick={handleLinkClick}
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              activeLink={activeLink}
              onClick={handleLinkClick}
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              activeLink={activeLink}
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
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

        {/* Small screen content */}
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
            <NavLink to="/" activeLink={activeLink} onClick={handleLinkClick}>
              Home
            </NavLink>
            <NavLink
              to="/skills"
              activeLink={activeLink}
              onClick={handleLinkClick}
            >
              Skills
            </NavLink>
            <NavLink
              to="/services"
              activeLink={activeLink}
              onClick={handleLinkClick}
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              activeLink={activeLink}
              onClick={handleLinkClick}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              activeLink={activeLink}
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </ul>
          <p>Copyright &copy; 2025 | Abdul Ali</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
