import React from "react";
import FollowMe from "@/components/followMe/followMe";
import FollowLinks from "@/components/followLinks/followLinks";
const Services = () => {
  return (
    <>
      <div className="text-center p-28 px-10 xss:px-3">
        <h1 className="text-7xl text-slate-700 xss:text-6xl xss:text-center">
          Services
        </h1>
        <br />
        <p className="text-2xl text-slate-700">Here what I offer</p>
      </div>
      <div className="flex flex-row justify-between items-center cursor-pointer flex-1 px-20 xss:flex-col sm:flex-col md:flex-col xss:mx-auto lg:flex-row lg:justify-between lg:gap-10 xl:mx-20">
        <div className="border-2 w-[300px] h-[300px] shadow-lg w-580:w-full">
          <h2 className="text-center text-3xl mt-12 text-slate-600 font-semibold xss:text-2xl">
            Responsive Websites
          </h2>
          <p className="xss:p-10 text-2xl text-center xss:text-base lg:text-base">
            When designing a responsive website for your service, It is
            important to prioritize the user experience.
          </p>
        </div>
        <div className="border-2 w-[300px] h-[300px] shadow-lg lg:mt-0 xss:mt-5 w-580:w-full lg:h-[300px]">
          <h2 className="text-center text-3xl mt-12 text-slate-600 font-semibold xss:text-2xl">
            Web App
          </h2>
          <p className="p-10 text-2xl text-center xss:text-base lg:text-base">
            I will create web apps for your business and I will provide a best
            service for your mobile app.
          </p>
        </div>
        <div className="border-2 w-[300px] h-[300px] shadow-lg xss:mt-5 lg:mt-0 w-580:w-full">
          <h2 className="text-center text-3xl mt-10 text-slate-600 font-semibold xss:text-2xl">
            Consultation
          </h2>
          <p className="p-10 text-2xl text-center xss:text-base lg:text-base">
            I am providing 24/7 support.
          </p>
        </div>
      </div>
      <FollowMe />
      <FollowLinks />
    </>
  );
};
export default Services;
