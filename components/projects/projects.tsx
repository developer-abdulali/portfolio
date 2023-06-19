import Image from "next/image";
import DigitalCal from "../../public/images/DigitalCal.png";
import charCounter from "../../public/images/CharCounters.png";
import MpicStore from "../../public/images/MpicStore.png";
import TodoAp from "../../public/images/Todo-ap.png";
import WeatherAp from "../../public/images/Weather-ap.png";
import PanaverseDao from "../../public/images/Panaverse-ap.png";
import GradingCal from "../../public/images/GradingCal.png";

export const myProjects = [
  { id: 1, title: "Digital Calculator", para: "Web Application", image: DigitalCal },
  { id: 2, title: "Character Counter", para: "Web Application", image: charCounter },
  { id: 3, title: "Mpic Store", para: "Web Application", image: MpicStore },
  { id: 4, title: "Todo App", para: "Web Application", image: TodoAp },
  { id: 5, title: "Weather App", para: "Web Application", image: WeatherAp },
  { id: 6, title: "Panaverse Dao", para: "Web Application", image: PanaverseDao },
  // { id: 7, title: 'Grading Calculator', para: 'Web App', image: GradingCal },
];

const Projects = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 sm:px-5 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {myProjects.map((project) => (
        <div key={project.id} className="flex flex-col items-center bg-red-50">
          <Image src={project.image} alt={project.title} width={350} height={300} />
          <h3 className="mt-2 text-4xl">{project.title}</h3>
          <p className="mt-1 text-3xl">{project.para}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;

