// ========== LINKS ==========
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";

export const links = [
  {
    title: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },

  {
    title: "About",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },

  {
    title: "Portfolio",
    icon: <FaFolderOpen className="nav-icon" />,
    path: "/portfolio",
  },

  {
    title: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];
