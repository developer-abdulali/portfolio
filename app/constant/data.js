import {
  FaCode,
  FaLaptopCode,
  FaExchangeAlt,
  FaShoppingCart,
  FaFileCode,
  FaBug,
  FaServer,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { MdOutlineMobileFriendly } from "react-icons/md";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const linksData = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

// projects data
export const projectsData = [
  {
    num: "01",
    title: "Movix App",
    img: "/assets/projects/movix.png",
    live: "https://moviemovixapp.netlify.app/",
    github: "#",
    description:
      "The Movix app is a sleek and modern movie discovery platform that provides users with access to millions of movies, TV shows, and information about their favorite celebrities. With an intuitive search bar and visually captivating design, the app allows users to explore and find content effortlessly. Deployed on Netlify, Movix showcases an engaging user interface with responsive design and a seamless browsing experience.",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
  },
  {
    num: "02",
    title: "Nike Shoes Store",
    img: "/assets/projects/nikeShoesStore.png",
    live: "https://nike-store-app.vercel.app/",
    github: "#",
    description:
      "Nike Shoes App is a stylish e-commerce platform for browsing and shopping the latest Nike shoes. With a sleek design and user-friendly interface, the app offers an effortless shopping experience. Deployed on Vercel for fast and reliable performance.",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
  },
  {
    num: "03",
    title: "Code Snap",
    img: "/assets/projects/codeSnap.png",
    live: "https://snap-code-six.vercel.app/",
    github: "#",
    description:
      "Snap Code App is a vibrant platform to display beautifully styled code snippets with customizable themes, padding, and language options. Perfect for developers and designers to showcase their code elegantly.",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
  },

  {
    num: "04",
    title: "QR Code Generator",
    img: "/assets/projects/QRCodeGenerator.png",
    live: "https://qr-code-generator-lac.vercel.app/",
    github: "#",
    description:
      "This is a clean, user-friendly application designed to generate customizable QR codes. Users can create QR codes for links or emails, modify the QR code's color and background, and download it in PNG or SVG format. The interface is responsive and visually appealing, making it easy for anyone to use.",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
  },
  {
    num: "05",
    title: "Dubai Movers Packers",
    img: "/assets/projects/dubaiMoversPackers.png",
    live: "https://dubai-movers-packers.vercel.app/",
    github: "#",
    description:
      "Make your move easy with Dubai Movers Packers. Our professional team offers reliable packing and moving services, including 24/7 house shifting. Get a quick quote and enjoy transparent pricing. Visit Dubai Movers Packers to start your stress-free move today.",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
  },
  {
    num: "06",
    title: "Panaverse DAO",
    img: "/assets/projects/panaverse.png",
    live: "https://panaverse-dao.vercel.app/",
    github: "#",
    description: "",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
  },
  {
    num: "07",
    title: "Focus",
    img: "/assets/projects/focus.png",
    live: "https://focus-zeta-seven.vercel.app/",
    github: "#",
    description:
      "A visually stunning landing page built with Tailwind CSS and animated using Framer Motion. The page is designed to captivate users with sleek UI/UX, smooth animations, and optimized responsiveness for all devices. 💡 Key Highlights: 🎥 Integrated engaging video content to enhance the storytelling experience. ✨ Seamless animations that bring the interface to life. 📱 Fully responsive design for both mobile and desktop users. Creating this project has been a fantastic experience, blending creativity and technical skills to deliver a modern and dynamic landing page. I'd love to hear your thoughts.",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
  },
  {
    num: "08",
    title: "Weather App",
    img: "/assets/projects/weatherapp.png",
    live: "https://weather-app-livid-tau.vercel.app/",
    github: "#",
    description:
      "A React.js weather application that provides real-time weather updates with a modern UI, dynamic backgrounds, and a search feature to check forecasts for any city. Deployed on Vercel for fast and reliable performance.",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
  },
  {
    num: "09",
    title: "React Todo Application",
    img: "/assets/projects/todo.png",
    live: "https://todo-app-red-delta.vercel.app/",
    github: "#",
    description:
      "A simple and stylish Todo App built with React.js, featuring task creation, editing, completion, and deletion. The app has a clean UI with interactive icons and smooth functionality. Deployed on Vercel for seamless access. ✅🚀",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
  },
];

// skills data
export const skillsData = [
  { name: "HTML", image: "/assets/skills/html.webp" },
  { name: "CSS", image: "/assets/skills/css.png" },
  { name: "Bootstrap", image: "/assets/skills/bootstrap.png" },
  { name: "JavaScript", image: "/assets/skills/js.png" },
  { name: "TypeScript", image: "/assets/skills/ts.png" },
  { name: "Tailwind CSS", image: "/assets/skills/tailwindcss.png" },
  { name: "React", image: "/assets/skills/react.png" },
  { name: "Next.js", image: "/assets/skills/next.png" },
  { name: "ShadCN UI", image: "/assets/skills/shadcd.png" },
  { name: "AOS", image: "/assets/skills/aos.png" },
  { name: "Cloudinary", image: "/assets/skills/cloudinary.png" },
  { name: "ExpressJS", image: "/assets/skills/expressjs.png" },
  { name: "Firebase", image: "/assets/skills/firebse.png" },
  { name: "Framer Motion", image: "/assets/skills/framermotion.svg" },
  { name: "JWT", image: "/assets/skills/jwt.png" },
  { name: "MongoDB", image: "/assets/skills/mongodb.svg" },
  { name: "Material UI", image: "/assets/skills/mui.png" },
  { name: "Node.js", image: "/assets/skills/node.png" },
  { name: "React Bootstrap", image: "/assets/skills/reactbootstrap.png" },
  { name: "React Icons", image: "/assets/skills/reacticons.png" },
];

// services data
export const servicesData = [
  {
    number: "01",
    title: "Web Development",
    Icon: FaCode,
    points: [
      "Performance & Load Time",
      "Reusable Components",
      "Responsiveness",
      "Quality assurance and testing",
      "Quality maintenance, updates and bug fixes",
    ],
    description:
      "I offer reliable web development services to generate remarkable results for your business.",
    href: "",
  },
  {
    number: "02",
    title: "Frontend Development",
    Icon: FaLaptopCode,
    points: [
      "Modern UI/UX Design",
      "Interactive User Interfaces",
      "Cross-browser Compatibility",
      "Performance Optimization",
      "Responsive Design",
    ],
    description:
      "I specialize in frontend development, creating engaging and user-friendly interfaces that enhance user experience.",
    href: "",
  },
  {
    number: "03",
    title: "Website Migration",
    Icon: FaExchangeAlt,
    points: [
      "Seamless Data Transfer",
      "Minimal Downtime",
      "Compatibility Checks",
      "Post-Migration Testing",
      "Ongoing Support",
    ],
    description:
      "I offer professional website migration services to ensure a smooth transition to new platforms or servers.",
    href: "",
  },
  {
    number: "04",
    title: "E-commerce Website Development",
    Icon: FaShoppingCart,
    points: [
      "Secure Payment Gateways",
      "User-friendly Interface",
      "SEO Optimization",
      "Inventory Management",
      "Customer Support Integration",
    ],
    description:
      "I develop robust e-commerce websites tailored to meet your business needs and drive online sales.",
    href: "",
  },
  {
    number: "05",
    title: "Figma Design Conversion",
    Icon: FaFileCode,
    points: [
      "Pixel-Perfect Conversion",
      "Responsive Design",
      "Cross-browser Compatibility",
      "Interactive Elements",
      "SEO-friendly Code",
    ],
    description:
      "I convert Figma designs into fully functional websites, ensuring accuracy and responsiveness.",
    href: "",
  },
  {
    number: "06",
    title: "Bug Fixing",
    Icon: FaBug,
    points: [
      "Quick Issue Resolution",
      "Code Optimization",
      "Preventive Measures",
      "Testing and Validation",
      "Ongoing Support",
    ],
    description:
      "I provide efficient bug fixing services to ensure your website runs smoothly and error-free.",
    href: "",
  },
  {
    number: "07",
    title: "REST API Development",
    Icon: FaServer,
    points: [
      "API Design and Implementation",
      "Secure Endpoints",
      "Data Validation",
      "Integration with Frontend",
      "Documentation and Testing",
    ],
    description:
      "I develop RESTful APIs that are secure, scalable, and integrate seamlessly with your frontend applications.",
    href: "",
  },
  {
    number: "08",
    title: "Mobile Responsive Design",
    Icon: MdOutlineMobileFriendly,
    points: [
      "Adaptive Layouts",
      "Touch-Friendly Interfaces",
      "Optimized Performance",
      "Cross-Device Compatibility",
      "Enhanced User Experience",
    ],
    description:
      "I create mobile-responsive designs that ensure your website looks great and functions well on all devices.",
    href: "",
  },
  {
    number: "09",
    title: "Local Deployment",
    Icon: FaCloudUploadAlt,
    points: [
      "Deployment on Netlify",
      "Deployment on Vercel",
      "Deployment on Surge",
      "Deployment on GitHub Pages",
      "Continuous Deployment and Integration",
    ],
    description:
      "I handle local deployment of web applications to platforms like Netlify, Vercel, Surge, and GitHub Pages, ensuring your site is live and accessible.",
    href: "",
  },
];

// aboutme data
export const aboutMe = {
  title: "About me",
  description:
    "I’m a React.js developer and junior MERN stack developer skilled in creating responsive UIs and full-stack applications using MongoDB, Express.js, React, and Node.js. I specialize in building dynamic apps like e-commerce platforms, blogs, and real-time tools, focusing on performance, security, and user-friendly design.",
  info: [
    { fieldName: "Name", fieldValue: "Abdul Ali" },
    { fieldName: "Phone", fieldValue: "(+92) 305 28 79926" },
    { fieldName: "Experience", fieldValue: "2 years" },
    { fieldName: "Email", fieldValue: "ab.ali.soomro@gmail.com" },
    { fieldName: "Freelance", fieldValue: "available" },
    { fieldName: "Languages", fieldValue: "English, Urdu" },
  ],
};

// experience data
export const experienceData = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nam!",
  items: [
    {
      company: "XYZ Tech",
      position: "React Developer",
      duration: "2022 - Present",
    },
    {
      company: "XYZ Tech",
      position: "React Developer",
      duration: "2022 - Present",
    },
    {
      company: "XYZ Tech",
      position: "React Developer",
      duration: "2022 - Present",
    },
    {
      company: "XYZ Tech",
      position: "React Developer",
      duration: "2022 - Present",
    },
    {
      company: "XYZ Tech",
      position: "React Developer",
      duration: "2022 - Present",
    },
  ],
};

// education data
export const educationData = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nam!",
  items: [
    {
      institution: "institution name",
      degree: "degree",
      duration: "2022",
    },
    {
      institution: "institution name",
      degree: "degree",
      duration: "2022",
    },
    {
      institution: "institution name",
      degree: "degree",
      duration: "2022",
    },
  ],
};

// skills data
export const mySkills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nam!",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};
