import { NextPage } from "next";
import FollowMe from "@/components/followMe/followMe";
import FollowLinks from "@/components/followLinks/followLinks";

const About: NextPage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8 px-4 xss:p-2">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8"></div>
            <h1 className="text-center text-7xl text-slate-700 mb-10 xss:text-5xl">
              About Me
            </h1>
            <p className="text-lg mb-4">
              Hi, I am Abdul Ali, a passionate web developer with experience in
              building modern and responsive websites. I specialize in front-end
              development using technologies like React, Next.js, Tailwind
              CSS, Bootstrap and Material UI.
            </p>
            <p className="text-lg mb-4">
              My goal is to create beautiful and user-friendly web applications
              that provide a great user experience. I am constantly learning and
              keeping up with the latest web development trends to deliver
              high-quality projects.
            </p>
            <p className="text-lg">
              If you have any questions or would like to discuss a potential
              project, feel free to get in touch with me. You can reach me
              through the contact information provided on the Contact page.
            </p>
          </div>
        </div>

        <FollowMe />
        <FollowLinks />
      </div>
    </>
  );
};

export default About;
