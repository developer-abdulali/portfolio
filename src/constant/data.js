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

// projects data
export const projectsData = [
  {
    _id: "a1b2c3d4e5f6g7h8i9j0",
    name: "Movix App",
    img: "/img/projects/movix.png",
    website: "https://moviemovixapp.netlify.app/",
    description:
      "The Movix app is a sleek and modern movie discovery platform that provides users with access to millions of movies, TV shows, and information about their favorite celebrities. With an intuitive search bar and visually captivating design, the app allows users to explore and find content effortlessly. Deployed on Netlify, Movix showcases an engaging user interface with responsive design and a seamless browsing experience.",
  },
  {
    _id: "b2c3d4e5f6g7h8i9j0k1",
    name: "Nike Shoes Store",
    img: "/img/projects/nikeShoesStore.png",
    website: "https://nike-store-app.vercel.app/",
    description:
      "Nike Shoes App is a stylish e-commerce platform for browsing and shopping the latest Nike shoes. With a sleek design and user-friendly interface, the app offers an effortless shopping experience. Deployed on Vercel for fast and reliable performance.",
  },
  {
    _id: "c3d4e5f6g7h8i9j0k1l2",
    name: "Code Snap",
    img: "/img/projects/codeSnap.png",
    website: "https://snap-code-six.vercel.app/",
    description:
      "Snap Code App is a vibrant platform to display beautifully styled code snippets with customizable themes, padding, and language options. Perfect for developers and designers to showcase their code elegantly.",
  },
  {
    _id: "d4e5f6g7h8i9j0k1l2m3",
    name: "QR Code Generator",
    img: "/img/projects/QRCodeGenerator.png",
    website: "https://qr-code-generator-lac.vercel.app/",
    description:
      "This is a clean, user-friendly application designed to generate customizable QR codes. Users can create QR codes for links or emails, modify the QR code's color and background, and download it in PNG or SVG format. The interface is responsive and visually appealing, making it easy for anyone to use.",
  },
  {
    _id: "e5f6g7h8i9j0k1l2m3n4",
    name: "Dubai Movers Packers",
    img: "/img/projects/dubaiMoversPackers.png",
    website: "https://dubai-movers-packers.vercel.app/",
    description:
      "Make your move easy with Dubai Movers Packers. Our professional team offers reliable packing and moving services, including 24/7 house shifting. Get a quick quote and enjoy transparent pricing. Visit Dubai Movers Packers to start your stress-free move today.",
  },
  {
    _id: "f6g7h8i9j0k1l2m3n4o5",
    name: "Panaverse DAO",
    img: "/img/projects/panaverse.png",
    website: "https://panaverse-dao.vercel.app/",
    description: "",
  },
  {
    _id: "g7h8i9j0k1l2m3n4o5p6",
    name: "Focus",
    img: "/img/projects/focus.png",
    website: "https://focus-zeta-seven.vercel.app/",
    description:
      "A visually stunning landing page built with Tailwind CSS and animated using Framer Motion. The page is designed to captivate users with sleek UI/UX, smooth animations, and optimized responsiveness for all devices. 💡 Key Highlights: 🎥 Integrated engaging video content to enhance the storytelling experience. ✨ Seamless animations that bring the interface to life. 📱 Fully responsive design for both mobile and desktop users. Creating this project has been a fantastic experience, blending creativity and technical skills to deliver a modern and dynamic landing page. I'd love to hear your thoughts.",
  },
  {
    _id: "h8i9j0k1l2m3n4o5p6q7",
    name: "Weather App",
    img: "/img/projects/weatherapp.png",
    website: "https://weather-app-livid-tau.vercel.app/",
    description:
      "A React.js weather application that provides real-time weather updates with a modern UI, dynamic backgrounds, and a search feature to check forecasts for any city. Deployed on Vercel for fast and reliable performance.",
  },
  {
    _id: "i9j0k1l2m3n4o5p6q7r8",
    name: "React Todo Application",
    img: "/img/projects/todo.png",
    website: "https://todo-app-red-delta.vercel.app/",
    description:
      "A simple and stylish Todo App built with React.js, featuring task creation, editing, completion, and deletion. The app has a clean UI with interactive icons and smooth functionality. Deployed on Vercel for seamless access. ✅🚀",
  },
];

// skills data
export const skillsData = [
  { name: "HTML", image: "/img/skills/html.webp" },
  { name: "CSS", image: "/img/skills/css.png" },
  { name: "Bootstrap", image: "/img/skills/bootstrap.png" },
  { name: "JavaScript", image: "/img/skills/js.png" },
  { name: "TypeScript", image: "/img/skills/ts.png" },
  { name: "Tailwind CSS", image: "/img/skills/tailwindcss.png" },
  { name: "React", image: "/img/skills/react.png" },
  { name: "Next.js", image: "/img/skills/next.png" },
  { name: "ShadCN UI", image: "/img/skills/shadcd.png" },
  { name: "AOS", image: "/img/skills/aos.png" },
  { name: "Cloudinary", image: "/img/skills/cloudinary.png" },
  { name: "ExpressJS", image: "/img/skills/expressjs.png" },
  { name: "Firebase", image: "/img/skills/firebse.png" },
  { name: "Framer Motion", image: "/img/skills/framermotion.svg" },
  { name: "JWT", image: "/img/skills/jwt.png" },
  { name: "MongoDB", image: "/img/skills/mongodb.svg" },
  { name: "Material UI", image: "/img/skills/mui.png" },
  { name: "Node.js", image: "/img/skills/node.png" },
  { name: "React Bootstrap", image: "/img/skills/reactbootstrap.png" },
  { name: "React Icons", image: "/img/skills/reacticons.png" },
];

// src/constant/data.js (services data)
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
  },
];
