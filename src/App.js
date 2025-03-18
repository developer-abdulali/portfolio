import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";
import Services from "./pages/services/services";
import MySkills from "./components/MySkills/MySkills";
import Footer from "./components/Footer/Footer";
import ProjectDetails from "./pages/projects/projectDetails";
import { useEffect, useState } from "react";
import Preloader from "./components/PreLoader/PreLoader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };

    // simulate a loading delay
    setTimeout(handleComplete, 3000);

    return () => {
      clearTimeout(handleComplete);
    };
  }, []);

  return (
    <section id="site-wrapper">
      {/* <Preloader isLoading={isLoading} /> */}
      <Header />
      {/* {!isLoading && ( */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* )} */}
      <Footer />
    </section>
  );
};
export default App;
