import React from "react";
import FollowMe from "@/components/followMe/followMe";
import FollowLinks from "@/components/followLinks/followLinks";
export default function Services() {
  return (
    <>
      <div className="text-center p-28 xss:p-3 xss:my-20 xss:text-center">
        <h1 className="text-7xl text-slate-700 xss:text-7xl">Services</h1>
        <br />
        <p className="text-2xl text-slate-700">Here what I offer</p>
      </div>
      <div className="flex flex-row justify-between  flex-1 px-20 xss:flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-between lg:gap-10">
        <div className="border-2 w-[400px] h-[400px] shadow-lg w-580:w-full">
          <h2 className="text-center text-3xl mt-12 text-slate-600 font-semibold">
            Responsive Websites
          </h2>
          <p className="xss:p-10 text-2xl text-center">
            When designing a responsive website for your service, It is
            important to prioritize the user experience.
          </p>
        </div>
        <div className="border-2 w-[400px] h-[400px] shadow-lg lg:mt-0 xss:mt-5 w-580:w-full lg:h-[400px]">
          <h2 className="text-center text-3xl mt-12 text-slate-600 font-semibold">
            Web App
          </h2>
          <p className="p-10 text-2xl text-center">
            I will create a web apps for your business and I will provide a best
            service for your mobile app.
          </p>
        </div>
        <div className="border-2 w-[400px] h-[400px] shadow-lg xss:mt-5 lg:mt-0 w-580:w-full">
          <h2 className="text-center text-3xl mt-10 text-slate-600 font-semibold">
            Consultation
          </h2>
          <p className="p-10 text-2xl text-center">
            I am provide 24/7 support.
          </p>
        </div>
      </div>
      <FollowMe />
      <FollowLinks />
    </>
  );
}
