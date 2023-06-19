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






// import React from 'react';
// import Image from 'next/image';

// import DigitalCal from '../../public/images/DigitalCal.png';
// import charCounter from '../../public/images/charCounter.png';
// import MpicStore from '../../public/images/MpicStore.png';
// import TodoAp from '../../public/images/Todo-ap.png';
// import WeatherAp from '../../public/images/Weather-ap.png';
// import PanaverseDao from '../../public/images/Panaverse-ap.png';
// import GradingCal from '../../public/images/GradingCal.png';

// export const myProjects = [
//   { id: 1, title: 'Digital Calculator', para: 'Web App', image: DigitalCal },
//   { id: 2, title: 'Character Counter', para: 'Web App', image: charCounter },
//   { id: 3, title: 'Mpic Store', para: 'Web App', image: MpicStore },
//   { id: 4, title: 'Todo App', para: 'Web App', image: TodoAp },
//   { id: 5, title: 'Weather App', para: 'Web App', image: WeatherAp },
//   { id: 6, title: 'Panaverse Dao', para: 'Web App', image: PanaverseDao },
//   { id: 7, title: 'Grading Calculator', para: 'Web App', image: GradingCal },
// ];

// const Projects = () => {
//   return (
//     <div className="container mx-auto flex flex-wrap justify-center gap-4">
//       {myProjects.map((project) => (
//         <div key={project.id} className="flex flex-col items-center p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
//           <div className="max-w-full h-48 sm:h-56 md:h-64 lg:h-72">
//             <Image
//               src={project.image}
//               alt={project.title}
//               layout="responsive"
//               width={300}
//               height={200}
//               objectFit="cover"
//               objectPosition="center"
//             />
//           </div>
//           <h3 className="mt-2 text-lg font-bold text-center">{project.title}</h3>
//           <p className="mt-1 text-center">{project.para}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projects;
