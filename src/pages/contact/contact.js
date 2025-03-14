import { useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { MdOutlineAttachEmail } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEamil] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [project, setProject] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDiscription] = useState("");

  const handleProjectChange = (projectName) => {
    if (project.includes(projectName)) {
      setProject(project.filter((project) => project !== projectName));
    } else {
      setProject([...project, projectName]);
    }
  };

  return (
    <section className="contactpage">
      <div className="container">
        <div className="contactformp">
          <div className="leftcontp">
            <h2>Get in touch</h2>
            <h2>Let's talking about your project</h2>
            <p>
              Thinking about a new project, a problem to solve, or just want to
              connect? Let's do it!
            </p>
            <p>Use the form on this page or get in touch by other means.</p>
            <p>
              We love question and feedback - and we're always happy to help!
            </p>
            <div className="leftsociinfo">
              <ul>
                <li>
                  <FaPhoneVolume />
                  <span>
                    Phone: <a href="tel:+923052879926">+923052879926</a>
                  </span>
                </li>
                <li>
                  <MdOutlineAttachEmail />
                  <span>
                    Email:{" "}
                    <a href="mailto:ab.ali.soomro@gmail.com">
                      ab.ali.soomro@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <GrLinkedin />
                  <span>
                    Linkedin:{" "}
                    <a href="https://linkedin.com/in/abdulali12">Abdul Ali</a>
                  </span>
                </li>
                <li>
                  <FaFacebook />
                  <span>
                    Facebook:{" "}
                    <a href="https://facebook.com/abdulalisoomro2k23">
                      Abdul Ali
                    </a>
                  </span>
                </li>
                <li>
                  <FaGithub />
                  <span>
                    Github:{" "}
                    <a href="https://github.com/developer-abdulali">
                      Abdul Ali
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="rightcontinputs">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First Name"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
