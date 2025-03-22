import React from "react";
import "./Navbar.css";

import { links } from "../../Data";
import { NavLink } from "react-router-dom";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nev-menu">
        <ul className="nav-list grid">
          {links.map(({ title, icon, path }, i) => {
            return (
              <li className="nav-item" key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav" : "nav-link"
                  }
                >
                  {icon}
                  <h3 className="nav-name">{title}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>

        <RiCloseLine className="nav-close" />
      </div>

      <div className="nav-toggle">
        <RiMenuLine />
      </div>
    </nav>
  );
};

export default Navbar;
