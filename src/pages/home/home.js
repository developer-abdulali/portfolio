import ExperienceStudy from "../../components/ExperienceStudy/ExperienceStudy";
import HeroSection from "../../components/HeroSection/HeroSection";
import MySkills from "../../components/MySkills/MySkills";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";
import ScrollProgressBar from "../../components/ScrollProgressBar/ScrollProgressBar";
import ServicesSection from "../../components/ServicesSection/ServicesSection";

const Home = () => {
  return (
    <>
      {/* Progress Bar */}
      <ScrollProgressBar />

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

      {/* Recent Blogs */}
      <RecentBlogs />
    </>
  );
};
export default Home;
