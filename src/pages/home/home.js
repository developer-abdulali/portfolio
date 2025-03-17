import { useEffect } from "react";
import ExperienceStudy from "../../components/ExperienceStudy/ExperienceStudy";
import HeroSection from "../../components/HeroSection/HeroSection";
import MySkills from "../../components/MySkills/MySkills";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";

const Home = () => {
  useEffect(() => {
    document.title = "Abdul Ali - Frontend Developer & React Specialist";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Study */}
      <ExperienceStudy />

      {/* My Skills */}
      <MySkills />
    </>
  );
};
export default Home;
