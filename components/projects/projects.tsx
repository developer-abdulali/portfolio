import Image, { StaticImageData } from "next/image";
import DigitalCal from "../../public/images/DigitalCal.png";
import charCounter from "../../public/images/CharCounters.png";
import MpicStore from "../../public/images/MpicStore.png";
import TodoAp from "../../public/images/Todo-ap.png";
import WeatherAp from "../../public/images/Weather-ap.png";
import PanaverseDao from "../../public/images/Panaverse-ap.png";
import WishAp from "../../public/images/Wish-App.png";
import MovieAp from "../../public/images/Movie-App.png";
import NikeStore from "../../public/images/Nike-Store.png";

interface IProjects {
  id: number;
  title: string;
  image: StaticImageData | string;
  url: string;
}

export const myProjects: Array<IProjects> = [
  {
    id: 1,
    title: "Digital Calculator",
    image: DigitalCal,
    url: "https://digital-calculator-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Character Counter",
    image: charCounter,
    url: "https://charactors-counter-app.vercel.app/",
  },
  {
    id: 3,
    title: "Mpic Store",
    image: MpicStore,
    url: "https://mpic-store.vercel.app/",
  },
  {
    id: 4,
    title: "Todo App",
    image: TodoAp,
    url: "https://todo-app-red-delta.vercel.app/",
  },
  {
    id: 5,
    title: "Weather App",
    image: WeatherAp,
    url: "https://weather-app-livid-tau.vercel.app/",
  },
  {
    id: 6,
    title: "Panaverse Dao",
    image: PanaverseDao,
    url: "https://panaverse-dao.vercel.app/",
  },
  {
    id: 7,
    title: "Movie App",
    image: MovieAp,
    url: "https://movie-app-nine-chi-80.vercel.app/",
  },
  {
    id: 8,
    title: "Wishes Bucket",
    image: WishAp,
    url: "https://wishes-bucket.vercel.app/"
  },
  {
    id: 9,
    title: "Nike Store App",
    image: NikeStore,
    url: "https://nike-store-app.vercel.app/"
  },
 
];

const Projects = () => {
  return (
    <div className="max-w-screen-xl mx-auto xss:mx-5 grid grid-cols-1 sm:grid-cols-2 sm:mx-5 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto xl:mx-auto gap-5">
      {myProjects.map((project: IProjects) => (
        <div
          key={project.id}
          className="flex flex-col items-center hover:border hover:shadow-lg cursor-pointer"
        >
          <Image
            src={project.image}
            alt={project.title}
            style={{ objectFit: "cover" }}
            className="rounded-md"
            width={350}
            height={300}
          />
          <h3 className="mt-2 text-2xl xs:text-3xl sm:text-4xl">
            {project.title}
          </h3>
          <a
            href={project.url}
            target="_blank"
            className="mt-1 text-xl sm:text-3xl hover:text-cyan-500 hover:underline duration-100"
          >
            Project Link
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
