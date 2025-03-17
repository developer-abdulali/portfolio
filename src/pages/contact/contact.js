import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.title = "Abdul Ali - Contact With Me";
    window.scrollTo(0, 0);
  }, []);
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
          <div className="rightcontp">
            <form>
              <div className="rightconttitle">
                <h2>Your Contact Information</h2>
              </div>
              <div className="rightcontinputs">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First name"
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEamil(e.target.value)}
                  placeholder="Email address"
                />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company name"
                />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                />
                {/* react-phone-input2 */}
              </div>

              <div className="rightcontcheckbox">
                {[
                  "Web Development",
                  "Frontend Developement",
                  "Website Migration",
                  "E-commerce website",
                  "Convert Figma Design",
                  "Convert React js into Next js",
                ].map((projectOption, i) => (
                  <label key={i} className="cyberpunk-checkbox-label">
                    <input
                      type="checkbox"
                      value={projectOption}
                      className="cyberpunk-checkbox"
                      checked={project.includes(projectOption)}
                      onChange={() => handleProjectChange(projectOption)}
                    />
                    {projectOption}
                  </label>
                ))}
              </div>
              <div className="rightconttitle">
                <h2>
                  How much is the anticipated budget for your next project?
                </h2>
              </div>
              <div className="rightcontradio">
                {[
                  "Less than $400",
                  "$400-$500",
                  "$800-$1000",
                  "More than $1000",
                ].map((priceRange, i) => (
                  <div key={i} className="radio-button">
                    <input
                      type="radio"
                      id={priceRange}
                      name="example-radio"
                      value={priceRange}
                      checked={price === priceRange}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <span className="radio"></span>
                    <label htmlFor={priceRange}>{priceRange}</label>
                  </div>
                ))}
              </div>
              <div className="rightconttitle">
                <h2>Tell me about your project</h2>
              </div>
              <div className="rightcontpera">
                <textarea
                  rows={4}
                  name="description"
                  value={description}
                  onChange={(e) => setDiscription(e.target.value)}
                  placeholder="Project description..."
                ></textarea>
              </div>
              <hr />
              <div className="rightcontsbtn flex gap-3">
                <button type="submit">Submit</button>
                {/* <p>message sent successfullly</p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
