// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BiDownload } from "react-icons/bi";
// import { GrLinkedinOption } from "react-icons/gr";
// import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

// import AOS from "aos";
// import "aos/dist/aos.css";

// const HeroSection = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <section className="hero">
//       <div className="intro_text" data-aos="fade-down" data-aos-duration="1500">
//         <svg viewBox="0 0 1320 300">
//           <text x="50%" y="50%" textAnchor="middle" className="animate-stroke">
//             HI
//           </text>
//         </svg>
//       </div>
//       <div className="container">
//         <div className="flex w-100">
//           <div className="heroinfoleft">
//             <span
//               data-aos="fade-right"
//               data-aos-delay="200"
//               className="hero_sb_title"
//             >
//               I am Abdul Ali
//             </span>
//             <h1 className="hero_title" data-aos="fade-up" data-aos-delay="400">
//               Web Developer + <br />{" "}
//               <span className="typed-text">React Developer</span>
//             </h1>
//             <div
//               className="hero_img_box heroimgbox"
//               data-aos="zoom-in"
//               data-aos-delay="600"
//             >
//               <img src="/img/mypic.jpg" alt="coder" />
//             </div>
//             <div className="lead" data-aos="fade-left" data-aos-delay="800">
//               I break down complex user experience problems to create integrity
//               focused solutions that connect billions of people.
//             </div>
//             <div
//               className="hero_btn_box"
//               data-aos="fade-up"
//               data-aos-delay="1000"
//             >
//               <Link to={"/"} className="download_cv">
//                 Download Cv <BiDownload />
//               </Link>
//               <ul className="hero_social">
//                 <li data-aos="zoom-in" data-aos-delay="1100">
//                   <Link
//                     to={"https://twitter.com/ab_ali2k23"}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaTwitter />
//                   </Link>
//                 </li>
//                 <li data-aos="zoom-in" data-aos-delay="1200">
//                   <Link
//                     to="https://linkedin.com/in/abdulali12"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <GrLinkedinOption />
//                   </Link>
//                 </li>
//                 <li data-aos="zoom-in" data-aos-delay="1300">
//                   <Link
//                     to="https://github.com/developer-abdulali"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaGithub />
//                   </Link>
//                 </li>
//                 <li data-aos="zoom-in" data-aos-delay="1400">
//                   <Link
//                     to="https://facebook.com/abdulalisoomro2k23"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaFacebook />
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* right side img section */}
//           <div
//             className="heroimageright"
//             data-aos="fade-left"
//             data-aos-delay="1500"
//           >
//             <div className="hero_img_box">
//               <img src="/img/mypic.jpg" alt="coder" />
//             </div>
//           </div>
//         </div>

//         <div
//           // data-aos="flip-left"
//           // data-aos-delay="1200"
//           className="funfect_area flex flex-sb"
//         >
//           <div className="funfect_item">
//             <h3>2</h3>
//             <h4>
//               Year of <br /> Experience
//             </h4>
//           </div>
//           <div className="funfect_item">
//             <h3>10+</h3>
//             <h4>
//               Projects <br /> Completed
//             </h4>
//           </div>
//           <div className="funfect_item">
//             <h3>1+</h3>
//             <h4>
//               Year of <br /> Experience
//             </h4>
//           </div>
//           <div className="funfect_item">
//             <h3>1+</h3>
//             <h4>
//               Year of <br /> Experience
//             </h4>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiDownload } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";

import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="hero">
      <div className="intro_text" data-aos="fade-down" data-aos-duration="1500">
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" textAnchor="middle" className="animate-stroke">
            HI
          </text>
        </svg>
      </div>
      <div className="container">
        <div className="flex w-100">
          <div className="heroinfoleft">
            <span
              data-aos="fade-right"
              data-aos-delay="200"
              className="hero_sb_title"
            >
              I am Abdul Ali
            </span>
            <h1 className="hero_title" data-aos="fade-up" data-aos-delay="400">
              Web Developer + <br />
              <Typewriter
                options={{
                  strings: [
                    "React js Developer",
                    "Next js Developer",
                    "Frontend Developer",
                    "MERN Stack Developer",
                    "Fullstack Developer",
                    "Freelancer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div
              className="hero_img_box heroimgbox"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img src="/img/mypic.jpg" alt="coder" />
            </div>
            <div className="lead" data-aos="fade-left" data-aos-delay="800">
              I break down complex user experience problems to create integrity
              focused solutions that connect billions of people.
            </div>
            <div
              className="hero_btn_box"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <Link to={"/"} className="download_cv">
                Download Cv <BiDownload />
              </Link>
              <ul className="hero_social">
                <li data-aos="zoom-in" data-aos-delay="1100">
                  <Link
                    to={"https://twitter.com/ab_ali2k23"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li data-aos="zoom-in" data-aos-delay="1200">
                  <Link
                    to="https://linkedin.com/in/abdulali12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrLinkedinOption />
                  </Link>
                </li>
                <li data-aos="zoom-in" data-aos-delay="1300">
                  <Link
                    to="https://github.com/developer-abdulali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </Link>
                </li>
                <li data-aos="zoom-in" data-aos-delay="1400">
                  <Link
                    to="https://facebook.com/abdulalisoomro2k23"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* right side img section */}
          <div
            className="heroimageright"
            data-aos="fade-left"
            data-aos-delay="1500"
          >
            <div className="hero_img_box">
              <img src="/img/mypic.jpg" alt="coder" />
            </div>
          </div>
        </div>

        <div
          // data-aos="flip-left"
          // data-aos-delay="1200"
          className="funfect_area flex flex-sb"
        >
          <div className="funfect_item">
            <h3>2</h3>
            <h4>
              Year of <br /> Experience
            </h4>
          </div>
          <div className="funfect_item">
            <h3>10+</h3>
            <h4>
              Projects <br /> Completed
            </h4>
          </div>
          <div className="funfect_item">
            <h3>1+</h3>
            <h4>
              Year of <br /> Experience
            </h4>
          </div>
          <div className="funfect_item">
            <h3>1+</h3>
            <h4>
              Year of <br /> Experience
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
