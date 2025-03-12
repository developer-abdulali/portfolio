import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Blogs from "./pages/blogs/blogs";
import Projects from "./pages/projects/projects";
import Services from "./pages/services/services";

const App = () => {
  return (
    <div id="site-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
